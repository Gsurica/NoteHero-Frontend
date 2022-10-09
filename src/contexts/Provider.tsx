import { ReactNode, useCallback, useReducer } from "react"
import { AppContextActions } from "../enums/AppContextActions";
import { AppContext, INITIAL_STATE } from "./context";
import { appContextReducer } from "./reducer/reducer";

interface CtxProps {
  children: ReactNode
}

export const AppContextProvider: React.FC<CtxProps> = ({ children }) => {

  const [state, dispatch] = useReducer(appContextReducer, INITIAL_STATE);

  const LogIn = () => {
    return dispatch({
      type: AppContextActions.LogIn,
    })
  }

  const LogOut = useCallback(() => {
    localStorage.clear();
    return dispatch({
      type: AppContextActions.LogOut,
    })
  }, [dispatch])

  const ShowModal = useCallback(() => {
    return dispatch({
      type: AppContextActions.Modal,
    });
  }, [dispatch]);

  const CloseModal = useCallback(() => {
    return dispatch({
      type: AppContextActions.CloseModal,
    });
  }, [dispatch]);

  const ShowTimeTrackerModal = useCallback(() => {
    return dispatch({
      type: AppContextActions.ShowTimeTrackerModal,
    });
  }, [dispatch]);

  const CloseTimeTrackerModal = useCallback(() => {
    return dispatch({
      type: AppContextActions.CloseTimeTrackerModal,
    });
  }, [dispatch]);


  return (
    <AppContext.Provider value={{
      state,
      LogIn,
      LogOut,
      ShowModal,
      CloseModal,
      ShowTimeTrackerModal,
      CloseTimeTrackerModal
    }}>
      { children }
    </AppContext.Provider>
  )
}
