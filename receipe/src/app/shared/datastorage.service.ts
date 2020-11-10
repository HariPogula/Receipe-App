import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../receipe/recipe.model';
import { map } from 'rxjs/operators';
import { RecipeListService } from './../receipe/receipe-list/recipe-list.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DatastorageService {
  private _url = 'https://mytechlogbook-v1.firebaseio.com/recipes.json';
  recipesChanged = new Subject<Recipe[]>();
  constructor(
    private http: HttpClient,
    private recipeService: RecipeListService
  ) {}

  fetchRecipes() {
    return this.http.get<Recipe[]>(
      'https://mytechlogbook-v1.firebaseio.com/recipes.json'
    );
    // .subscribe((r) => {
    //   console.log('get Recipes' + JSON.stringify(r));
    //   this.recipeService.setRecipes(r);
    // });
  }

  saveRecipes(recipe: Recipe) {
    // const recipes = this.recipeService.getRecipes();
    this.http
      .post('https://mytechlogbook-v1.firebaseio.com/recipes.json', recipe)
      // .pipe(
      //   map((recipes: any) => {
      //     return recipes.map((recipe) => {
      //       return {
      //         ...recipe,
      //         ingredeients: recipe.ingredeients ? recipe.ingredeients : [],
      //       };
      //     });
      //   })
      // )
      .subscribe((res: any) => {
        //  console.log('Firebase:' + res);
        this.recipesChanged.next(res);
      });
  }
}
