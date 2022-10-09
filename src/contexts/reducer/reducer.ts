import { AppContextActions } from "../../enums/AppContextActions";
import { IDispatchAction } from "../../interfaces/IDispatchAction";
import { InitialStateType, INITIAL_STATE } from "../auth";

export const appContextReducer = (state = INITIAL_STATE, action: IDispatchAction): InitialStateType => {
  switch(action.type) {
    case AppContextActions.LogIn:
      return {
        ...state,
        log: true,
      };
    case AppContextActions.LogOut:
      return {
        ...state,
        log: false,
      }
    default:
      throw new Error();
  }
}