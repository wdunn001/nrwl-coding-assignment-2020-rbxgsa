import {
  EntityState,
  createEntityAdapter,
  Update,
  Dictionary
} from "@ngrx/entity";
import { Action, createSelector } from "@ngrx/store";
import { AppState } from "./app.store";
import { Ticket } from "./models/ticket.model";

export const adapter = createEntityAdapter<Ticket>({
  selectId: (model: Ticket) => model.id
});

export interface TicketState extends EntityState<Ticket> {
  selectedTicketId: string | null;
  selectedTicket: Ticket;
  ticketsLoaded: boolean;
}

export const initialState: TicketState = adapter.getInitialState({
  selectedTicketId: null,
  selectedTicket: null,
  ticketsLoaded: false
});

export enum ticketActionTypes {
  ADD_ONE = "[Ticket] AddOne",
  ADD_MANY = "[Ticket] AddMany",
  ADD_ALL = "[Ticket] AddAll",
  UPSERT_ONE = "[Ticket] UpsertOne",
  UPSERT_MANY = "[Ticket] UpsertMany",
  UPDATE_ONE = "[Ticket] UpdateOne",
  UPDATE_MANY = "[Ticket] UpdateMany",
  REMOVE_ONE = "[Ticket] RemoveOne",
  REMOVE_MANY = "[Ticket] RemoveMany",
  REMOVE_ALL = "[Ticket] RemoveAll",
  IDSELECT = "[Ticket] IdSelect",
  SELECT = "[Ticket] Select",
  LOADED = "[Ticket] Loaded"
}

export class TicketAddOne implements Action {
  readonly type = ticketActionTypes.ADD_ONE;
  constructor(public payload: Ticket) {}
}

export class TicketAddMany implements Action {
  readonly type = ticketActionTypes.ADD_MANY;
  constructor(public payload: Ticket[]) {}
}

export class TicketUpsertOne implements Action {
  readonly type = ticketActionTypes.UPSERT_ONE;
  constructor(public payload: Ticket) {}
}

export class TicketUpsertMany implements Action {
  readonly type = ticketActionTypes.UPSERT_MANY;
  constructor(public payload: Ticket[]) {}
}

export class TicketAddAll implements Action {
  readonly type = ticketActionTypes.ADD_ALL;
  constructor(public payload: Ticket[]) {}
}

export class TicketUpdateOne implements Action {
  readonly type = ticketActionTypes.UPDATE_ONE;
  constructor(public payload: Update<Ticket>) {}
}

export class TicketUpdateMany implements Action {
  readonly type = ticketActionTypes.UPDATE_MANY;
  constructor(public payload: Update<Ticket>[]) {}
}

export class TicketRemoveOne implements Action {
  readonly type = ticketActionTypes.REMOVE_ONE;
  constructor(public payload: string) {}
}

export class TicketRemoveMany implements Action {
  readonly type = ticketActionTypes.REMOVE_MANY;
  constructor(public payload: string[]) {}
}

export class TicketRemoveAll implements Action {
  readonly type = ticketActionTypes.REMOVE_ALL;
}

export class TicketIdSelect implements Action {
  readonly type = ticketActionTypes.IDSELECT;

  constructor(public payload: string) {}
}

export class TicketSelect implements Action {
  readonly type = ticketActionTypes.SELECT;

  constructor(public payload: Ticket) {}
}

export class TicketLoaded implements Action {
  readonly type = ticketActionTypes.LOADED;

  constructor(public payload: boolean) {}
}

export type TicketActions =
  | TicketAddOne
  | TicketAddMany
  | TicketAddAll
  | TicketUpsertOne
  | TicketUpsertMany
  | TicketUpdateOne
  | TicketUpdateMany
  | TicketRemoveOne
  | TicketRemoveMany
  | TicketRemoveAll
  | TicketIdSelect
  | TicketSelect
  | TicketLoaded;

export function ticketReducer(
  state: TicketState = initialState,
  action: TicketActions
): TicketState {
  switch (action.type) {
    case ticketActionTypes.ADD_ONE:
      return adapter.addOne(action.payload, state);
    case ticketActionTypes.ADD_MANY:
      return adapter.addMany(action.payload, state);
    case ticketActionTypes.ADD_ALL:
      return adapter.addMany(action.payload, state);
    case ticketActionTypes.UPSERT_ONE:
      return adapter.upsertOne(action.payload, {
        ...state,
        ticketsLoaded: true
      });
    case ticketActionTypes.UPSERT_MANY:
      return adapter.upsertMany(action.payload, {
        ...state,
        ticketsLoaded: true
      });
    case ticketActionTypes.UPDATE_ONE:
      return adapter.updateOne(action.payload, state);
    case ticketActionTypes.UPDATE_MANY:
      return adapter.updateMany(action.payload, state);
    case ticketActionTypes.REMOVE_ONE:
      return adapter.removeOne(action.payload, state);
    case ticketActionTypes.REMOVE_MANY:
      return adapter.removeMany(action.payload, state);
    case ticketActionTypes.REMOVE_ALL:
      return adapter.removeAll({
        ...state,
        selectedTicketId: null,
        ticketsLoaded: false
      });
    case ticketActionTypes.IDSELECT:
      return Object.assign({ ...state, selectedTicketId: action.payload });
    case ticketActionTypes.SELECT:
      return Object.assign({ ...state, selectedTicket: action.payload });
    case ticketActionTypes.LOADED:
      return Object.assign({ ...state, ticketsLoaded: action.payload });
    default:
      return state;
  }
}

export const getTicketState = createSelector(
  (state: AppState) => state,
  (state: AppState) => state.tickets
);

export const {
  selectAll: selectAllTickets,
  selectEntities: selectTicketEntities,
  selectIds: selectTicketIds,
  selectTotal: ticketCount
} = adapter.getSelectors(getTicketState);

export const getSelectedTicketId = (state: TicketState) =>
  state.selectedTicketId;

export const getSelectedTicket = (state: TicketState) => state.selectedTicket;

export const selectCurrentTicketId = createSelector(
  getTicketState,
  getSelectedTicketId
);
export const selectCurrentTicket = createSelector(
  getTicketState,
  getSelectedTicket
);
export const getAllTickets = createSelector(
  selectAllTickets,
  tickets => tickets
);

export const getCurrentSelectedTicket = createSelector(
  selectCurrentTicket,
  ticket => ticket
);

export const selectCurrentTicketbyId = createSelector(
  selectTicketEntities,
  selectCurrentTicketId,
  (ticketEntities, ticketId) => ticketEntities[ticketId]
);
export const getTicketById = (id: string) =>
  createSelector(
    selectTicketEntities,
    ticketEntities => ticketEntities[id]
  );

export const selectTicketsLoaded = createSelector(
  getTicketState,
  state => state.ticketsLoaded
);
