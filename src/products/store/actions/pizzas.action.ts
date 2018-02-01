import { Action } from '@ngrx/store';

import { Pizza } from '../../models/pizza.model';

export const LOAD_PIZZAS = '[Pizza] Loading Pizzas';
export const LOAD_PIZZAS_FAIL = '[Pizza] Could not load Pizzas';
export const LOAD_PIZZAS_SUCCESS = '[Pizza] Loaded Pizzas successfully';

export const SELECT_PIZZA = '[Pizza] Selected a Pizza';

// Load

export class LoadPizzas implements Action {
  readonly type = LOAD_PIZZAS;
  constructor() {}
}

export class LoadPizzasFail implements Action {
  readonly type = LOAD_PIZZAS_FAIL;
  constructor(public payload: any) {}
}

export class LoadPizzasSuccess implements Action {
  readonly type = LOAD_PIZZAS_SUCCESS;
  constructor(public payload: Pizza[]) {}
}

// Select

export class SelectPizza implements Action {
  readonly type = SELECT_PIZZA;
  constructor(public payload: Pizza) {}
}

// action types
export type PizzasAction = LoadPizzas | LoadPizzasFail | LoadPizzasSuccess | SelectPizza;
