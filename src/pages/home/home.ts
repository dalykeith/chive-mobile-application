import { RecipeService } from '../../providers/recipe-service/recipe-service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NavController, AlertController, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  recipes: Observable<any>;

  constructor(public navCtrl: NavController, public recipeService: RecipeService, public alertCtrl: AlertController, public toastCtrl: ToastController) {
    this.loadRecipes();
  }

  loadRecipes() {
    this.recipes = this.recipeService.getRecipes();
  }

  addRecipe() {
    let prompt = this.alertCtrl.create({
      title: 'Add Recipe',
      message: "Enter the text for your new recipe",
      inputs: [
        {
          name: 'text',
          placeholder: 'Make Curry'
        },
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler: data => {
            this.recipeService.addRecipe(data.text).subscribe(data => {
              this.showToast(data.msg);
              this.loadRecipes();
            });
          }
        }
      ]
    });
    prompt.present();
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
