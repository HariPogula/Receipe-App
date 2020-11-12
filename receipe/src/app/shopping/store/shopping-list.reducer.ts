import { Action } from '@ngrx/store';
import { Ingredeient } from '../../shared/ingredient.model';
import * as ShoppingListActions from './shopping-list.action';

const initialState = {
  ingredients: [new Ingredeient('Apples', 5), new Ingredeient('Mango', 10)],
};
export function ShoppingListReducer(
  state = initialState,
  action: ShoppingListActions.AddIngredient
) {
  // Reducers are functions which will send new state to the Store.
  // We should NOT change the state/anything directly in existing object/array
  //Instead, we need to copy entire thing using spread operator and return it.
  switch (action.type) {
    case ShoppingListActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload],
      };

    default:
      return state;
  }
}
