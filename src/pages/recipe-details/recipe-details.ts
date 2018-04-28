import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-recipe-details',
  templateUrl: 'recipe-details.html',
})
export class RecipeDetailsPage {

  // Recipe variables
  title: any;
  category: any;
  prepTime: any;
  cookTime: any;
  servingSize: any;
  ingredients: any;
  directions: any;

  // onSelect() pushes the navigation to the recipes details page
  // It also carries the recipe JSON object with it
  // navParams is used to get the key values of the recipe JSON
  // These are then stored in class variables to be accessed through data binding in the HTML document
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title = this.navParams.get('title');
    this.category = this.navParams.get('category');
    this.prepTime = this.navParams.get('prepTime');
    this.cookTime = this.navParams.get('cookTime');
    this.servingSize = this.navParams.get('servingSize');
    this.ingredients = this.navParams.get('ingredients');
    this.directions = this.navParams.get('directions');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecipeDetailsPage');
  }

}
