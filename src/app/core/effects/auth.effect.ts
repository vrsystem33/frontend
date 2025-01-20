// Angular
import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

// RxJS
import { filter, mergeMap, tap, withLatestFrom, catchError, map } from 'rxjs/operators';
import { defer, of } from 'rxjs';

// NGRX
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';

// Auth actions
import { login, logout, userLoaded, userRequested } from '../actions/auth.action';
import { AuthService } from '../../services/auth.service';
import { AppState } from '../reducers';
import { environment } from '../../../environments/environment';
import { isUserLoaded } from '../selectors/auth.selector';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      tap(action => {
        localStorage.setItem(environment.authTokenKey, action.token);
        this.store.dispatch(userRequested());
      })
    ),
    { dispatch: false }
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logout),
      mergeMap(() =>
        this.auth.logout().pipe(
          tap(() => {
            localStorage.removeItem(environment.authTokenKey);
            this.router.navigate(['/auth/login'], { queryParams: { returnUrl: this.returnUrl } });
          }),
          catchError(() => {
            localStorage.removeItem(environment.authTokenKey);
            this.router.navigate(['/auth/login'], { queryParams: { returnUrl: this.returnUrl } });
            return of({ type: '[Auth API] Logout Failure' }); // Emite uma ação de falha genérica
          })
        )
      )
    )
  );

  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userRequested),
      withLatestFrom(this.store.pipe(select(isUserLoaded))),
      filter(([_, isLoaded]) => !isLoaded),
      mergeMap(() =>
        this.auth.getUserByToken().pipe(
          map(user => user ? userLoaded({ user }) : logout()),
          catchError(() => of(logout())) // Em caso de erro, desloga o usuário
        )
      )
    )
  );

  init$ = createEffect(() =>
    defer(() => {
      const userToken = localStorage.getItem(environment.authTokenKey);
      if (userToken) {
        return of(login({ token: userToken }));
      } else {
        return of({ type: 'NO_ACTION' });
      }
    })
  );

  private returnUrl: string;

  constructor(
    private actions$: Actions,
    private router: Router,
    private auth: AuthService,
    private store: Store<AppState>
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.returnUrl = event.url;
      }
    });
  }
}