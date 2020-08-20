import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.scss'],
})
export class ReceipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipe: Recipe[] = [
    new Recipe(
      'A Test Receipe-1',
      'Test Description-1',
      '../../../assets/images/recipe-1.jpg'
    ),
    new Recipe(
      'A Test Receipe-2',
      'Test Description-2',
      '../../../assets/images/recipe-2.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
