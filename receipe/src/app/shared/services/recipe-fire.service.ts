import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Recipe } from 'src/app/receipe/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeFireService {
  constructor(private fireStore: AngularFirestore) {}

  createRecipe(recipe: Recipe) {
    return this.fireStore
      .collection('recipes')
      .add(recipe)
      .then((suc) => {
        console.log('Saved Successfully ' + suc);
      })
      .catch((err) => {
        console.log('Error: ' + err);
      });
  }

  getRecipes() {
    return this.fireStore.collection('recipes').snapshotChanges();
  }

  getRecipe(id: string) {
    console.log('Service Id:' + id);

    return this.fireStore
      .collection('recipes', (s) => s.where('name', '==', id))
      .snapshotChanges();
  }

  deleteRecipe(id: string) {
    return this.fireStore
      .doc('recipes' + id)
      .delete()
      .then((s) => {
        console.log('Successful Delete' + s + ' and ' + id);
      })
      .catch((err) => {
        console.log('Delete Error' + err);
      });
  }

  updateRecipe(recipe: Recipe, id: string) {
    return this.fireStore.doc('recipes/' + id).update(recipe);
  }
}
