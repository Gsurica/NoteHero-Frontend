import { useContext } from "react"
import { AppContext } from "../context";

export const useAppContext = () => {
  const context = useContext(AppContext);
  return context;
}