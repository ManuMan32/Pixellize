import { useState } from 'react'
import './App.css'
import Home from './components/home/home';
import { Language, ScreenState } from './model';
import { GlobalContext } from './globalContext';
import Editor from './components/editor/editor';

function App() {
  const [actualLanguage, setActualLanguage] = useState<Language>("en");
  const [screenState, setScreenState] = useState<ScreenState>("editor");
  let renderizedScreen;
  switch(screenState) {
    default:
    case "home": renderizedScreen = <Home />; break;
    case "editor": renderizedScreen = <Editor />; break;
  }
  return (
    <div className='screen'>
      <GlobalContext.Provider value={{
        actualLanguage,
        setActualLanguage
      }}>
        {renderizedScreen}
      </GlobalContext.Provider>
    </div>
  )
}

export default App
