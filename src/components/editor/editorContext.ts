import { createContext, useContext } from "react"
import { TOOLS } from "../../model";
export interface EditorContextType {
  tool: TOOLS,
  setTool: (a: TOOLS) => void
}
export const EditorContext = createContext<EditorContextType>({
  tool: TOOLS.BRUSH,
  setTool: () => void 0
});
export const useEditorContext = () => useContext(EditorContext);