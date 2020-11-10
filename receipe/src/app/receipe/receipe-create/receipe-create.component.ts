import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DatastorageService } from 'src/app/shared/datastorage.service';
import { RecipeFireService } from 'src/app/shared/services/recipe-fire.service';

import { RecipeListService } from '../receipe-list/recipe-list.service';

@Component({
  selector: 'app-receipe-create',
  templateUrl: './receipe-create.component.html',
  styleUrls: ['./receipe-create.component.scss'],
})
export class ReceipeCreateComponent implements OnInit {
  id: number;
  editMode: boolean = false;
  recipeForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeListService,
    private domSanitizer: DomSanitizer,
    private router: Router,
    private dataService: DatastorageService,
    private recipeFire: RecipeFireService
  ) {}
  get controls() {
    // a getter!
    return (<FormArray>this.recipeForm.get('ingredeients')).controls;
  }
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
      console.log('Edit Mode: ' + this.editMode);
    });
  }

  private initForm() {
    let recipeName = '';
    let recipeImagePath: any = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;

      console.log('Image Path: ' + recipeImagePath);

      recipeDescription = recipe.description;
      console.log('Ing are ' + JSON.stringify(recipe['ingredeients']));

      if (recipe['ingredeients']) {
        for (let ing of recipe.ingredeients) {
          recipeIngredients.push(
            new FormGroup({
              ingName: new FormControl(ing.ingName, Validators.required),
              ingAmount: new FormControl(ing.ingAmount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/),
              ]),
            })
          );
        }
      }
    }
    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      imagePath: new FormControl(recipeImagePath, Validators.required),
      description: new FormControl(recipeDescription, Validators.required),
      ingredeients: recipeIngredients,
    });
  }

  onSave() {
    console.log('Recipe Value: ' + JSON.stringify(this.recipeForm.value));
    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, this.recipeForm.value);
    } else {
      this.recipeFire.createRecipe(this.recipeForm.value);
      //this.dataService.saveRecipes(this.recipeForm.value);
      // this.recipeService.addRecipe(this.recipeForm.value);
    }
    this.onCancel();
  }

  addIng() {
    (<FormArray>this.recipeForm.get('ingredeients')).push(
      new FormGroup({
        ingName: new FormControl('', Validators.required),
        ingAmount: new FormControl('', [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/),
        ]),
      })
    );
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredeients')).removeAt(index);
  }
}
