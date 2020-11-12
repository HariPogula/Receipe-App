import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Ingredeient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from './shoppping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Observable<{ ingredients: Ingredeient[] }>;
  private igChangedSub: Subscription;
  constructor(
    private slService: ShoppingListService,
    // Store will tell what type reducer we are using
    // "shoppingList" name should match with app.module key and that key return a reducer.
    //So we need to pass the key from reducer intial state with it's type
    private store: Store<{ shoppingList: { ingredients: Ingredeient[] } }>
  ) {}

  ngOnInit(): void {
    this.ingredients = this.store.select('shoppingList');

    // this.ingredients = this.slService.getIngredients();
    // this.igChangedSub = this.slService.ingChanged.subscribe(
    //   (ing: Ingredeient[]) => {
    //     this.ingredients = ing;
    //   }
    //);
  }

  // inIngAdded(newIng: Ingredeient) {
  //   console.log(`Ing is ${JSON.stringify(newIng)}`);
  //   this.ingredients.push(newIng);
  // }

  onEdit(index) {
    this.slService.startedEditing.next(index);
  }

  ngOnDestroy(): void {
    // this.igChangedSub.unsubscribe();
  }
}
