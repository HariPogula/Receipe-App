import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeListService } from '../receipe-list/recipe-list.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeFireService } from 'src/app/shared/services/recipe-fire.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-receipe-detail',
  templateUrl: './receipe-detail.component.html',
  styleUrls: ['./receipe-detail.component.scss'],
})
export class ReceipeDetailComponent implements OnInit {
  // @Input()
  recipe: Recipe;
  id: string;
  constructor(
    private recipeService: RecipeListService,
    private route: ActivatedRoute,
    private router: Router,
    private recipeFire: RecipeFireService
  ) {}

  ngOnInit(): void {
    console.log('Recipe is ' + this.recipe);
    this.route.params.subscribe((a: Params) => {
      this.id = a['id'];
      console.log('Id in Details: ' + this.id);
      this.getRecipe();
      // this.recipe = this.recipeService.getRecipe(this.id);
    });
  }

  getRecipe() {
    this.recipeFire.getRecipe(this.id).subscribe((a: any) => {
      //// console.log('a value: ' + JSON.parse(JSON.stringify(a)));

      this.recipe = a.map((e) => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data(),
        };
      });
    });
  }
  AddToShoppingList() {
    this.recipeService.addToShoppingList(this.recipe.ingredeients);
  }
  onEditRecipe() {
    // We don't need to pass Id because we are using relative Path.
    // Till Here, the url is http://localhost:4200/recipes/0. So we just need to pass edit after this.
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  onDeleteRecipe() {
    //this.recipeService.deleteRecipe(this.id);
    this.recipeFire.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }
}
