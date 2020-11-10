import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  OnDestroy,
} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DatastorageService } from 'src/app/shared/datastorage.service';
import { RecipeFireService } from 'src/app/shared/services/recipe-fire.service';
import { environment } from 'src/environments/environment';
import { Recipe } from '../recipe.model';
import { RecipeListService } from './recipe-list.service';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.scss'],
})
export class ReceipeListComponent implements OnInit, OnDestroy {
  // @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[];
  showSelected: any;
  routerId: number;
  addSubscription: Subscription;
  constructor(
    private router: Router,
    // public recipeService: RecipeListService,
    private route: ActivatedRoute,
    // private dataService: DatastorageService,
    private recipeFire: RecipeFireService
  ) {}

  ngOnInit(): void {
    //To get the Latest recipes after adding or updating
    // this.addSubscription = this.recipeService.recipesChanged.subscribe((r) => {
    //   this.recipe = r;
    // });
    // this.recipe = this.recipeService.getRecipes();

    this.loadRecipes();
    // this.dataService.fetchRecipes().subscribe((res) => {
    //   // console.log('List Recipes: ' + JSON.stringify(res));

    //   this.recipes = res;
    // });
    //this.showSelected = this.route.snapshot.params['id'];
    console.log('List Ng Onit is ' + this.showSelected);
  }

  resetSelectedRecipe() {
    this.router.navigate(['recipes']);
    // this.showSelected = this.recipeService.isRecipeSelected.next(false);
  }

  onNewRecipe() {
    // Since we have child routes, we need to give relative path using activate route.
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  ngOnDestroy(): void {
    // this.addSubscription.unsubscribe();
  }

  loadRecipes() {
    this.recipeFire.getRecipes().subscribe((a: any) => {
      this.recipes = a.map((e) => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data(),
        };
      });
    });
    // console.log('Load: ' + JSON.stringify(this.recipes));
  }
  //Since we are emitting from RecipeListService.
  // onRecipeSelected(recipe: Recipe) {
  //   this.recipeWasSelected.emit(recipe);
  // }
}
