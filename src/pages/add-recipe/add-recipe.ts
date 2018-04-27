import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-add-recipe',
  templateUrl: 'add-recipe.html',
})
export class AddRecipePage {

    title: string;
    category: string;
    prepTime: number;
    cookTime: number;
    servingSize: number;
    ingredients: string;
    directions: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  save(): void {

    let recipe = {
      title: this.title,
      category: this.category,
      prepTime: this.prepTime,
      cookTime: this.cookTime,
      servingSize: this.servingSize,
      ingredients: this.ingredients,
      directions: this.directions
    };

    this.viewCtrl.dismiss(recipe);

  }

  close(): void {
    this.viewCtrl.dismiss();
  }

}
