import { TOOLS } from '../../model';
import './editor.css';
import { useState } from 'react';
import EditorToolButton from './editortoolbutton/editortoolbutton';
import { EditorContext } from './editorContext';
import CanvasBox from './canvasbox/canvasbox';
const toolsArr = [TOOLS.BRUSH, TOOLS.ERASER, TOOLS.LINE, TOOLS.RECTANGLE, TOOLS.CIRCLE, TOOLS.POLYGON, TOOLS.BUCKET, TOOLS.SELECT];
const Editor: React.FC = () => {
  const [tool, setTool] = useState<TOOLS>(TOOLS.BRUSH);
  return (
    <div className='editor'>
      <EditorContext.Provider value={{
        tool,
        setTool
      }}>
        <div className='editorBar editorToolbar'>
          {toolsArr.map(t => <EditorToolButton buttonTool={t} key={t} />)}
        </div>
        <div className='editorBar editorSettingsbar'></div>
        <CanvasBox />
      </EditorContext.Provider>
    </div>
  )
}
export default Editor;