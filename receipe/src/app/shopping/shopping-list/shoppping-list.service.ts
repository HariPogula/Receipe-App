import { Ingredeient } from 'src/app/shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class ShoppingListService {
  // ingChanged = new EventEmitter<Ingredeient[]>();
  startedEditing = new Subject<number>();
  ingChanged = new Subject<Ingredeient[]>();
  private ingredients: Ingredeient[] = [
    new Ingredeient('Apples', 5),
    new Ingredeient('Mango', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }
  getIngredient(index: number) {
    return this.ingredients[index];
  }
  addingredient(ing: Ingredeient) {
    this.ingredients.push(ing);
    this.ingChanged.next(this.ingredients.slice());
  }

  addIngredients(ing: Ingredeient[]) {
    this.ingredients.push(...ing); //this will add multiple ing's at a time. Instead of usimg for loop.
    this.ingChanged.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIng: Ingredeient) {
    this.ingredients[index] = newIng;
    this.ingChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingChanged.next(this.ingredients.slice());
  }
}
