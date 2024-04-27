import { TOOLS } from '../../../model';
import { useEditorContext } from '../editorContext';
import './editortoolbutton.css';
interface Props {
  buttonTool: TOOLS
}
const EditorToolButton: React.FC<Props> = ({ buttonTool }) => {
  const { tool, setTool } = useEditorContext();
  const getToolImage = (id: TOOLS): string => {
    switch (id) {
      case TOOLS.BRUSH: return "/icons/brush.svg";
      case TOOLS.ERASER: return "/icons/eraser.svg";
      case TOOLS.LINE: return "/icons/line.svg";
      case TOOLS.RECTANGLE: return "/icons/rectangle.svg";
      case TOOLS.CIRCLE: return "/icons/circle.svg";
      case TOOLS.POLYGON: return "/icons/polygon.svg";
      case TOOLS.BUCKET: return "/icons/bucket.svg";
      case TOOLS.SELECT: return "/icons/select.svg";
    }
  }
  return (
    <button type='button'
      className={'button editorToolButton' + ((tool == buttonTool) ? ' editorToolButtonSelected' : '')}
      onClick={() => setTool(buttonTool)}>
      <img className='icon' src={getToolImage(buttonTool)} />
    </button>
  )
}
export default EditorToolButton;