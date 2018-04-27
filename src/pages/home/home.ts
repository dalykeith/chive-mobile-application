import { RecipeService } from '../../providers/recipe-service/recipe-service';
import { AddRecipePage } from '../add-recipe/add-recipe';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NavController, NavParams, AlertController, ToastController, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  recipes: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public recipeService: RecipeService, public alertCtrl: AlertController, public toastCtrl: ToastController, public modalCtrl: ModalController) {
    this.loadRecipes();
  }

  loadRecipes() {
    this.recipes = this.recipeService.getRecipes();
  }

  addRecipe() {
    let modal = this.modalCtrl.create(AddRecipePage);

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

  removeRecipe(id) {
    this.recipeService.deleteRecipe(id).subscribe(data => {
      this.showToast(data.msg);
      this.loadRecipes();
    })
  }

  private showToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }
}
