import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
  showSelected: any;
  routerId: number;
  constructor(
    private router: Router,
    public recipeService: RecipeListService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.recipe = this.recipeService.getRecipes();
    this.showSelected = this.route.snapshot.params['id'];
    console.log('List Ng Onit is ' + this.showSelected);
  }

  resetSelectedRecipe() {
    this.showSelected = this.recipeService.isRecipeSelected.next(false);
  }

  onNewRecipe() {
    // Since we have child routes, we need to give relative path using activate route.
    this.router.navigate(['new'], { relativeTo: this.route });
  }
  //Since we are emitting from RecipeListService.
  // onRecipeSelected(recipe: Recipe) {
  //   this.recipeWasSelected.emit(recipe);
  // }
}
