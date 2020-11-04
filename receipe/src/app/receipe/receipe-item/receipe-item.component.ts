import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeListService } from '../receipe-list/recipe-list.service';

@Component({
  selector: 'app-receipe-item',
  templateUrl: './receipe-item.component.html',
  styleUrls: ['./receipe-item.component.scss'],
})
export class ReceipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  showSelected: any;
  @Input() index: number;
  // @Output() recipeSelected = new EventEmitter<void>();
  constructor(private recipeService: RecipeListService) {}

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe((a) => {
      this.showSelected = a;

      console.log('Show Seleted: ' + JSON.stringify(this.showSelected));
    });
  }

  // onSelected() {
  //   this.recipeService.recipeSelected.emit(this.recipe);
  //   //OR
  //   // this.recipeSelected.emit();
  // }
}
