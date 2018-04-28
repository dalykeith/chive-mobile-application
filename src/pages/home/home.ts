import { RecipeService } from '../../providers/recipe-service/recipe-service';
import { AddRecipePage } from '../add-recipe/add-recipe';
import { RecipeDetailsPage } from '../recipe-details/recipe-details';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NavController, NavParams, AlertController, ToastController, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // Array of recipe observables
  recipes: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public recipeService: RecipeService, public alertCtrl: AlertController, public toastCtrl: ToastController, public modalCtrl: ModalController) {
    // On load, populate the recipes
    this.loadRecipes();
  }

  // Load all recipes
  loadRecipes() {
    // HTTP get
    this.recipes = this.recipeService.getRecipes();
  }


  addRecipe() {
    // Create a modal which directs to the add recipe page
    let modal = this.modalCtrl.create(AddRecipePage);

    // After the user inputs their recipe to the modalCtrl
    // subscribe the data so the recipe object can be sent to the backend
    modal.onDidDismiss(recipe => {
      if(recipe){
        this.recipeService.addRecipe(recipe).subscribe(data => {
              this.showToast(data.msg);
              this.loadRecipes();
            });
      }
    });

    modal.present();
  }

  // Remove a recipe
  removeRecipe(id) {
    this.recipeService.deleteRecipe(id).subscribe(data => {
      this.showToast(data.msg);
      this.loadRecipes();
    })
  }

  // Open the recipe details page of the selected recipe object
  onSelect(recipe){
    this.navCtrl.push(RecipeDetailsPage, recipe)
  }

  private showToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }
}
