import { useState } from 'react'
import './App.css'
import Home from './components/home/home';

function App() {
  const [screenState, setScreenState] = useState<number>(0);
  let renderizedScreen;
  switch(screenState) {
    case 0: renderizedScreen = <Home />
      break;
  }
  return (
    <div className='screen'>
      {renderizedScreen}
    </div>
  )
}

export default App
