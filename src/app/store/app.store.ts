import { ActionReducerMap, MetaReducer, ActionReducer } from "@ngrx/store";
import { ticketReducer, TicketState } from "./ticket.store";
import { localStorageSync } from "ngrx-store-localstorage";

const STORE_KEYS_TO_PERSIST_IN_LOCAL_STORAGE = [];

const STORE_KEYS_TO_PERSIST_IN_SESSION_STORAGE = [];

export interface AppState {
  tickets: TicketState;
}

export const appReducer: ActionReducerMap<AppState> = {
  tickets: ticketReducer
};

export function localStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({
    keys: STORE_KEYS_TO_PERSIST_IN_LOCAL_STORAGE,
    rehydrate: true
  })(reducer);
}
export function sessionStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({
    keys: STORE_KEYS_TO_PERSIST_IN_SESSION_STORAGE,
    rehydrate: true,
    storage: sessionStorage
  })(reducer);
}
export const metaReducers: MetaReducer<AppState>[] = [
  localStorageSyncReducer,
  sessionStorageSyncReducer
];
