import { ReactNode, useCallback, useReducer } from "react"
import { AppContextActions } from "../enums/AppContextActions";
import { AppContext, INITIAL_STATE } from "./auth"
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

  return (
    <AppContext.Provider value={{
      state,
      LogIn,
      LogOut
    }}>
      { children }
    </AppContext.Provider>
  )
}
