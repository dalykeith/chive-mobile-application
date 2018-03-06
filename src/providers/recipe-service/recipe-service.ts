import { AppSettings } from '../app-settings/app-settings';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RecipeService {
  apiUrl = this.appSettings.getApiUrl();

  constructor(public http: Http, public appSettings: AppSettings) {
  }

  public getRecipes() {
    return this.http.get(this.apiUrl + 'recipes')
      .map(response => response.json().result);
  }

  public addRecipe(newRecipe) {
    return this.http.post(this.apiUrl + 'recipes', {'text': newRecipe})
      .map(response => response.json());
  }

  public deleteRecipe(recipeId) {
    return this.http.delete(this.apiUrl + 'recipes/' + recipeId)
      .map(response => response.json());
  }
}
