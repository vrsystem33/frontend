import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[Auth] Login',
  props<{ token: string }>()
);

export const logout = createAction(
  '[Auth] Logout'
);

export const userRequested = createAction(
  '[Auth] User Requested'
);

export const userLoaded = createAction(
  '[Auth] User Loaded',
  props<{ user: any }>()
);