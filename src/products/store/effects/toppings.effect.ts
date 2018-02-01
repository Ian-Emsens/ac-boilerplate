import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Subscription } from 'rxjs/Subscription';

import {
  map,
  catchError,
  exhaustMap,
} from 'rxjs/operators';

import * as toppingsActions from '../actions/toppings.action';
import * as fromServices from '../../services';

@Injectable()
export class ToppingsEffects {

  @Effect() loadToppings$: Observable<toppingsActions.ToppingsAction> =
  this.actions.ofType(toppingsActions.LOAD_TOPPINGS).pipe(
    exhaustMap(() => {
      return this.toppingsService.getToppings().pipe(
        map(res => {
          return new toppingsActions.LoadToppingsSuccess(res);
        }),
        catchError(err => of(new toppingsActions.LoadToppingsFail(err)))
      )
    })
  );

  constructor(
    private actions: Actions,
    private toppingsService: fromServices.ToppingsService
  ) {}
}
