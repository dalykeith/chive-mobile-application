import { AppSettings } from '../app-settings/app-settings';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

// The API routes in chive-backend are transformed to the functions of the provider
// each mapping the result to a JSON object and returning the Observable
@Injectable()
export class RecipeService {
  apiUrl = this.appSettings.getApiUrl();

  constructor(public http: Http, public appSettings: AppSettings) {
  }

  // Get all recipes
  public getRecipes() {
    return this.http.get(this.apiUrl + 'recipes')
      .map(response => response.json().result);
  }

  // Create a recipes
  public addRecipe(newRecipe) {
    return this.http.post(this.apiUrl + 'recipes', newRecipe)
      .map(response => response.json());
  }

  // Delete a recipe 
  public deleteRecipe(recipeId) {
    return this.http.delete(this.apiUrl + 'recipes/' + recipeId)
      .map(response => response.json());
  }
}
