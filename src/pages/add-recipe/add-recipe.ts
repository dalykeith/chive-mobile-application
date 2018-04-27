import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-add-recipe',
  templateUrl: 'add-recipe.html',
})
export class AddRecipePage {

    text: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  save(): void {

    let recipe = {
      text: this.text
    };

    this.viewCtrl.dismiss(recipe);

  }

  close(): void {
    this.viewCtrl.dismiss();
  }

}
