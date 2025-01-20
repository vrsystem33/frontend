import { createSelector } from '@ngrx/store';
import { AppState } from '../reducers';

export const selectAuthState = (state: AppState) => state.auth;

export const isLoggedIn = createSelector(
  selectAuthState,
  auth => auth.loggedIn
);

export const isLoggedOut = createSelector(
  isLoggedIn,
  loggedIn => !loggedIn
);

export const currentAuthToken = createSelector(
  selectAuthState,
  auth => auth.token
);

export const isUserLoaded = createSelector(
  selectAuthState,
  auth => auth.isUserLoaded
);

export const currentUser = createSelector(
  selectAuthState,
  auth => auth.user
);

export const currentUserRoleIds = createSelector(
  currentUser,
  user => user?.roles || []
);