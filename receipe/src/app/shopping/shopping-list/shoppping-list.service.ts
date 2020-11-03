import { Ingredeient } from 'src/app/shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
  ingChanged = new EventEmitter<Ingredeient[]>();
  private ingredients: Ingredeient[] = [
    new Ingredeient('Apples', 5),
    new Ingredeient('Mango', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addingredient(ing: Ingredeient) {
    this.ingredients.push(ing);
    this.ingChanged.emit(this.ingredients.slice());
  }

  addIngredients(ing: Ingredeient[]) {
    this.ingredients.push(...ing); //this will add multiple ing's at a time. Instead of usimg for loop.
    this.ingChanged.emit(this.ingredients.slice());
  }
}
