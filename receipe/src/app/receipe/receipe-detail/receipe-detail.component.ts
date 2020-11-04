import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeListService } from '../receipe-list/recipe-list.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-receipe-detail',
  templateUrl: './receipe-detail.component.html',
  styleUrls: ['./receipe-detail.component.scss'],
})
export class ReceipeDetailComponent implements OnInit {
  // @Input()
  recipe: Recipe;
  id: number;
  constructor(
    private recipeService: RecipeListService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log('Recipe is ' + this.recipe);
    this.route.params.subscribe((a: Params) => {
      this.id = +a['id'];
      console.log('Id in Details: ' + this.id);

      this.recipe = this.recipeService.getRecipe(this.id);
    });
  }

  AddToShoppingList() {
    this.recipeService.addToShoppingList(this.recipe.ingredeients);
  }
  onEditRecipe() {
    // We don't need to pass Id because we are using relative Path.
    this.router.navigate(['edit'], { relativeTo: this.route });
  }
}
