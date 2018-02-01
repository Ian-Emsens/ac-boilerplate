import * as fromPizzas from '../actions/pizzas.action';
import { Pizza } from '../../models/pizza.model';

export interface PizzaState {
  loaded: boolean;
  loading: boolean;
  pizzas: Pizza[];
}

const initialState: PizzaState = {
  loaded: false,
  loading: false,
  pizzas: [],
};

export function reducer(state: PizzaState = initialState, action: fromPizzas.PizzasAction): PizzaState {
  switch (action.type) {
    case fromPizzas.LOAD_PIZZAS: {
      console.log(fromPizzas.LOAD_PIZZAS, state);
      return {
        ...state,
        loading: true,
        loaded: false,
      }
    }

    case fromPizzas.LOAD_PIZZAS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      }
    }

    case fromPizzas.LOAD_PIZZAS_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
        pizzas: action.payload,
      }
    }

    default:
      break;
  }
  return state;
}
