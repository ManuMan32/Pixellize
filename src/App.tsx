import { useState } from 'react'
import './App.css'
import Home from './components/home/home';
import { Language, ScreenState } from './model';

function App() {
  const [language, setLanguage] = useState<Language>("en");
  const [screenState, setScreenState] = useState<ScreenState>("home");
  let renderizedScreen;
  switch(screenState) {
    case "home": renderizedScreen = <Home />
      break;
  }
  return (
    <div className='screen'>
      {renderizedScreen}
    </div>
  )
}

export default App
