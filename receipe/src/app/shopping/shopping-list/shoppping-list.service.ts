import { Ingredeient } from 'src/app/shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class ShoppingListService {
  // ingChanged = new EventEmitter<Ingredeient[]>();
  ingChanged = new Subject<Ingredeient[]>();
  private ingredients: Ingredeient[] = [
    new Ingredeient('Apples', 5),
    new Ingredeient('Mango', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addingredient(ing: Ingredeient) {
    this.ingredients.push(ing);
    this.ingChanged.next(this.ingredients.slice());
  }

  addIngredients(ing: Ingredeient[]) {
    this.ingredients.push(...ing); //this will add multiple ing's at a time. Instead of usimg for loop.
    this.ingChanged.next(this.ingredients.slice());
  }
}
