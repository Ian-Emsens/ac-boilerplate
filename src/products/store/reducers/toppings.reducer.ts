import * as fromToppings from '../actions/toppings.action';

import { Pizza } from '../../models/pizza.model';

export interface ToppingsState {
  loaded: boolean,
  loading: boolean,
  toppings: string[],
}

const initialState: ToppingsState = {
  loaded: false,
  loading: false,
  toppings: [],
};

export function reducer(state: ToppingsState = initialState, action: fromToppings.ToppingsAction): ToppingsState {
  switch (action.type) {
    case fromToppings.LOAD_TOPPINGS: {
      return {
        ...state,
        loaded: false,
        loading: true,
      }
    }


    case fromToppings.LOAD_TOPPINGS_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false,
      }
    }


    case fromToppings.LOAD_TOPPINGS_SUCCESS: {
      return {
        ...state,
        loaded: true,
        loading: false,
        toppings: action.payload,
      }
    }

    default:
      break;
  }
  return state;
}

// Load
export const getToppings = (state: ToppingsState) => state.toppings;
export const getToppingsLoaded = (state: ToppingsState) => state.loaded;
export const getToppingsLoading = (state: ToppingsState) => state.loading;
