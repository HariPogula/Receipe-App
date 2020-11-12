import { Action } from '@ngrx/store';
import { Ingredeient } from '../shared/ingredient.model';

const initialState = {
  ingredients: [new Ingredeient('Apples', 5), new Ingredeient('Mango', 10)],
};
export function ShoppingListReducer(state = initialState, action: Action) {
  // Reducers are functions which will send new state to the Store.
  // We should NOT change the state/anything directly in existing object/array
  //Instead, we need to copy entire thing using spread operator and return it.
  switch (action.type) {
    case 'ADD_INGREDIENT':
      return {
        ...state,
        ingredients: [...state.ingredients, action],
      };
  }
}
