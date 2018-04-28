import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-add-recipe',
  templateUrl: 'add-recipe.html',
})
export class AddRecipePage {

    // Recipe object variables
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

    // Model the recipe as an object
    // This allows it to be sent back through the view controller
    // This is then passed and subscribed through a HTTP post request to the server later on
    let recipe = {
      title: this.title,
      category: this.category,
      prepTime: this.prepTime,
      cookTime: this.cookTime,
      servingSize: this.servingSize,
      ingredients: this.ingredients,
      directions: this.directions
    };

    // Dismiss the modal and return the recipe object
    this.viewCtrl.dismiss(recipe);

  }

  // Close the modal
  close(): void {
    this.viewCtrl.dismiss();
  }

}
