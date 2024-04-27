import './editor.css';
const Editor: React.FC = () => {
  return (
    <div className='editor'>
      <div className='editorBar editorToolbar'></div>
      <div className='editorBar editorSettingsbar'></div>
      <div className='editorBar editorCanvas'></div>
    </div>
  )
}
export default Editor;