import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeListService } from '../receipe-list/recipe-list.service';

@Component({
  selector: 'app-receipe-detail',
  templateUrl: './receipe-detail.component.html',
  styleUrls: ['./receipe-detail.component.scss'],
})
export class ReceipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private recipeService: RecipeListService) {}

  ngOnInit(): void {
    console.log('Recipe is ' + this.recipe);
  }

  AddToShoppingList() {
    this.recipeService.addToShoppingList(this.recipe.ingredeients);
  }
}
