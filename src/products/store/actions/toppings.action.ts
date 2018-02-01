import { Action } from '@ngrx/store';

export const LOAD_TOPPINGS = '[Toppings] Loading Toppings';
export const LOAD_TOPPINGS_FAIL = '[Toppings] Failed to load Toppings';
export const LOAD_TOPPINGS_SUCCESS = '[Toppings] Loaded Toppings successfully';

// Load
export class LoadToppings implements Action {
  readonly type = LOAD_TOPPINGS;
  constructor() {}
}

export class LoadToppingsFail implements Action {
  readonly type = LOAD_TOPPINGS_FAIL;
  constructor(public payload: any) {}
}

export class LoadToppingsSuccess implements Action {
  readonly type = LOAD_TOPPINGS_SUCCESS;
  constructor(public payload: string[]) {}
}

// action types
export type ToppingsAction = LoadToppings | LoadToppingsFail | LoadToppingsSuccess;
