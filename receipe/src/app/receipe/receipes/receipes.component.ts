import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeListService } from '../receipe-list/recipe-list.service';
import { ReceipeListComponent } from '../receipe-list/receipe-list.component';

@Component({
  selector: 'app-receipes',
  templateUrl: './receipes.component.html',
  styleUrls: ['./receipes.component.scss'],
  providers: [RecipeListService],
})
export class ReceipesComponent implements OnInit {
  selectedRecipe: Recipe = undefined;
  constructor(private recipeService: RecipeListService) {}

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
      this.selectedRecipe = recipe;
    });
  }
}
