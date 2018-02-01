import { Action } from '@ngrx/store';

import { Pizza } from '../../models/pizza.model';

export const LOAD_PIZZAS = '[Pizza] Loading Pizza';
export const LOAD_PIZZAS_FAIL = '[Pizza] Could not load Pizza';
export const LOAD_PIZZAS_SUCCESS = '[Pizza] Loaded Pizza successfully';

export class LoadPizza implements Action {
  readonly type = LOAD_PIZZAS;
  constructor() {}
}

export class LoadPizzaFail implements Action {
  readonly type = LOAD_PIZZAS_FAIL;
  constructor(public payload: any) {}
}

export class LoadPizzaSuccess implements Action {
  readonly type = LOAD_PIZZAS_SUCCESS;
  constructor(public payload: Pizza[]) {}
}

// action types
export type PizzasAction = LoadPizza | LoadPizzaFail | LoadPizzaSuccess;
