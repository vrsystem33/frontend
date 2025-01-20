// NGRX
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { environment } from '../../../environments/environment';
import { authReducer, AuthState } from './auth.reducers';

// Definindo a interface do estado da aplicação
export interface AppState {
  router: ReturnType<typeof routerReducer>; // Tipagem do estado do roteador
  auth: AuthState;
}

// Mapeamento dos reducers para o estado da aplicação
export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
  auth: authReducer
};

// Meta reducers são usados para modificar o comportamento dos reducers
export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];