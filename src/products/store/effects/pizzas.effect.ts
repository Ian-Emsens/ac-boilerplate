import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Effect, Actions } from '@ngrx/effects';

import { of } from 'rxjs/observable/of';
import { Subscription } from 'rxjs/Subscription';

import {
  map,
  catchError,
  exhaustMap,
} from 'rxjs/operators';

import * as pizzaActions from '../actions/pizzas.action';
import * as fromServices from '../../services';

@Injectable()
export class PizzasEffects {

  @Effect() loadPizza$ =
    this.actions.ofType(pizzaActions.LOAD_PIZZAS).pipe(
      exhaustMap(() => {
        return this.pizzaService.getPizzas().pipe(
          map(res => {
            return new pizzaActions.LoadPizzasSuccess(res);
          }),
          catchError(err => of(new pizzaActions.LoadPizzasFail(err)))
        )
      })
    )

  constructor(
    private router: Router,
    private actions: Actions,
    private pizzaService: fromServices.PizzasService
  ) {}
}
