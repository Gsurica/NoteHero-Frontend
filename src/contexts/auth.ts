import { createContext } from "react";

export const INITIAL_STATE = {
  log: false,
}

export type InitialStateType = typeof INITIAL_STATE;

export const AppContext = createContext({
  state: INITIAL_STATE,
  LogIn: () => {},
  LogOut: () => {}
});