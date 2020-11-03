import { Recipe } from '../recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredeient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping/shopping-list/shoppping-list.service';
@Injectable()
export class RecipeListService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipe: Recipe[] = [
    new Recipe(
      'A Test Receipe-12',
      'Test Description-1',
      '../../../assets/images/recipe-1.jpg',
      [new Ingredeient('meat', 1), new Ingredeient('fries', 20)]
    ),
    new Recipe(
      'A Test Receipe-2',
      'Test Description-2',
      '../../../assets/images/recipe-2.jpg',
      [new Ingredeient('meat', 1), new Ingredeient('fries', 30)]
    ),
  ];
  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipe.slice(); //New array with exact copy.
  }
  addToShoppingList(ing: Ingredeient[]) {
    this.slService.addIngredients(ing);
  }
}
