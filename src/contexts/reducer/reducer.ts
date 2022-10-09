import { AppContextActions } from "../../enums/AppContextActions";
import { IDispatchAction } from "../../interfaces/IDispatchAction";
import { InitialStateType, INITIAL_STATE } from "../context";

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
      };

    case AppContextActions.Modal:
      return {
        ...state,
        modal: true,
      };
    
    case AppContextActions.CloseModal:
      return {
        ...state,
        modal: false,
      }
    
    case AppContextActions.ShowTimeTrackerModal:
      return {
        ...state,
        timetrackerModal: true,
      }
    
    case AppContextActions.CloseTimeTrackerModal:
      return {
        ...state,
        timetrackerModal: false,
      }
  
    default:
      throw new Error();
  }
}