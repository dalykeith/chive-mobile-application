import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-recipe-details',
  templateUrl: 'recipe-details.html',
})
export class RecipeDetailsPage {

  title: any;
  category: any;
  prepTime: any;
  cookTime: any;
  servingSize: any;
  ingredients: any;
  directions: any;

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
