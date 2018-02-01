import * as fromPizzas from '../actions/pizzas.action';
import { Pizza } from '../../models/pizza.model';

export interface PizzaState {
  loaded: boolean;
  loading: boolean;
  pizzas: Pizza[];
  selected: Pizza;
}

const initialState: PizzaState = {
  loaded: false,
  loading: false,
  pizzas: [],
  selected: null,
};

export function reducer(state: PizzaState = initialState, action: fromPizzas.PizzasAction): PizzaState {
  switch (action.type) {

    // Load
    case fromPizzas.LOAD_PIZZAS: {
      return {
        ...state,
        loaded: false,
        loading: true,
      }
    }

    case fromPizzas.LOAD_PIZZAS_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false,
      }
    }

    case fromPizzas.LOAD_PIZZAS_SUCCESS: {
      return {
        ...state,
        loaded: true,
        loading: false,
        pizzas: action.payload,
      }
    }

    // Select
    case fromPizzas.SELECT_PIZZA: {
      return {
        ...state,
        selected: action.payload
      }
    }

    default:
      break;
  }
  return state;
}

// Load
export const getPizzas = (state: PizzaState) => state.pizzas;
export const getPizzasLoaded = (state: PizzaState) => state.loaded;
export const getPizzasLoading = (state: PizzaState) => state.loading;

// Select
export const getSelectedPizza = (state: PizzaState) => state.selected;
