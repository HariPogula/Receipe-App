import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeListService } from './recipe-list.service';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.scss'],
})
export class ReceipeListComponent implements OnInit {
  // @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipe: Recipe[];
  constructor(private recipeService: RecipeListService) {}

  ngOnInit(): void {
    this.recipe = this.recipeService.getRecipes();
  }

  //Since we are emitting from RecipeListService.
  // onRecipeSelected(recipe: Recipe) {
  //   this.recipeWasSelected.emit(recipe);
  // }
}
