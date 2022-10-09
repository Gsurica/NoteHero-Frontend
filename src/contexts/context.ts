import { createContext } from "react";

export const INITIAL_STATE = {
  log: false,
  modal: false,
  timetrackerModal: false,
}

export type InitialStateType = typeof INITIAL_STATE;

export const AppContext = createContext({
  state: INITIAL_STATE,
  LogIn: () => {},
  LogOut: () => {},
  ShowModal: () => {},
  CloseModal: () => {},
  ShowTimeTrackerModal: () => {},
  CloseTimeTrackerModal: () => {},
});