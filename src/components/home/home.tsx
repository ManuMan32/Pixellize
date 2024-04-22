import './home.css';
import HomeButton from './homeButton/homeButton';
import { useState } from 'react';
const Home: React.FC = () => {
  const [mainWindow, setMainWindow] = useState<number>(0);
  return (
    <div className='homeScreen'>
      <div className='titleBox'>
        <img src='/logo.png' />
      </div>
      {(mainWindow === 0) ? (<div className='buttonsBox'>
        <HomeButton title='New' description='Create a new project' />
        <HomeButton title='Galery' description='See your creations or edit them' />
        <HomeButton title='Guide' description='Learn how to use the editor' />
        <HomeButton title='Options' description='Customize the page to your liking' />
      </div>) : (
        <div></div>
      )}

    </div>
  )
}
export default Home;