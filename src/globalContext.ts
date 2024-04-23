import { createContext, useContext } from "react"
import { Language } from "./model"
export interface GlobalContextType {
  actualLanguage: Language
  setActualLanguage: (p: Language) => void
}
export const GlobalContext = createContext<GlobalContextType>({
  actualLanguage: "en",
  setActualLanguage: () => void 0
});
export const useGlobalContext = () => useContext(GlobalContext);