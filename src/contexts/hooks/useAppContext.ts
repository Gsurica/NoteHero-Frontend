import { useContext } from "react"
import { AppContext } from "../auth";

export const useAppContext = () => {
  const context = useContext(AppContext);
  return context;
}