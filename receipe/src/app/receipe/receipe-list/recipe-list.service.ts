import { Recipe } from '../recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredeient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping/shopping-list/shoppping-list.service';
import { BehaviorSubject, Subject } from 'rxjs';
@Injectable()
export class RecipeListService {
  recipesChanged = new Subject<Recipe[]>();
  isRecipeSelected = new BehaviorSubject<boolean>(false);
  recipeSelected = new Subject<Recipe>();
  private recipe: Recipe[] = [
    // new Recipe(
    //   'A Test Receipe-1',
    //   'Test Description-1',
    //   'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTkmkv8J-bPHPgOmCNC8u9Qz-Mz2WE8I37N2A&usqp=CAU',
    //   [new Ingredeient('meat', 1), new Ingredeient('fries', 20)]
    // ),
    // new Recipe(
    //   'A Test Receipe-2',
    //   'Test Description-2',
    //   'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRHJxnADbvJNReSY1f4jXY3J7Y5GSNLdI5y-w&usqp=CAU',
    //   [new Ingredeient('meat', 1), new Ingredeient('fries', 30)]
    // ),
    // new Recipe(
    //   'A Test Receipe-3',
    //   'Test Description-3',
    //   'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTu-zSJLu46wPe0Bz_0oohM53Sc1B9l8oDJBQ&usqp=CAU',
    //   [new Ingredeient('meat', 1), new Ingredeient('fries', 30)]
    // ),
    // new Recipe(
    //   'A Test Receipe-4',
    //   'Test Description-4',
    //   'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTkmkv8J-bPHPgOmCNC8u9Qz-Mz2WE8I37N2A&usqp=CAU',
    //   [new Ingredeient('meat', 1), new Ingredeient('fries', 30)]
    // ),
  ];
  constructor(private slService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipe = recipes;
    this.recipesChanged.next(this.recipe.slice());
  }
  getRecipes() {
    return this.recipe.slice(); //New array with exact copy.
  }
  getRecipe(index: number) {
    return this.recipe[index];
  }

  addToShoppingList(ing: Ingredeient[]) {
    this.slService.addIngredients(ing);
  }

  addRecipe(recipe: Recipe) {
    this.recipe.push(recipe);
    this.recipesChanged.next(this.recipe.slice());
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipe[index] = recipe;
    this.recipesChanged.next(this.recipe.slice());
  }

  deleteRecipe(index: number) {
    this.recipe.splice(index, 1);
    this.recipesChanged.next(this.recipe.slice());
  }
}
