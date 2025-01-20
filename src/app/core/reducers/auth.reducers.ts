import { createReducer, on } from '@ngrx/store';
import { login, logout, userLoaded } from '../actions/auth.action';

export interface AuthState {
  loggedIn: boolean;
  token: any | null;
  user: any;
  isUserLoaded: boolean;
}

export const initialAuthState: AuthState = {
  loggedIn: false,
  token: null,
  user: null,
  isUserLoaded: false
};

export const authReducer = createReducer(
  initialAuthState,
  on(login, (state, { token }) => ({
    ...state,
    loggedIn: true,
    token,
    user: null,
    isUserLoaded: false
  })),
  on(logout, () => initialAuthState),
  on(userLoaded, (state, { user }) => ({
    ...state,
    user,
    isUserLoaded: true
  }))
);