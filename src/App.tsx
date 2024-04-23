import { useState } from 'react'
import './App.css'
import Home from './components/home/home';
import { Language, ScreenState } from './model';
import { GlobalContext } from './globalContext';

function App() {
  const [actualLanguage, setActualLanguage] = useState<Language>("en");
  const [screenState, setScreenState] = useState<ScreenState>("home");
  let renderizedScreen;
  switch(screenState) {
    case "home": renderizedScreen = <Home />
      break;
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
