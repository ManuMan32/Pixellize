import './home.css';
import HomeButton from './homeButton/homeButton';
import { useState } from 'react';
import LanguageSelect from './languageSelect/languageSelect';
import lang from '../../lang';
const Home: React.FC = () => {
  const [mainWindow, setMainWindow] = useState<number>(0);
  return (
    <div className='homeScreen'>
      <div className='titleBox'>
        <LanguageSelect />
        <img src='/logo.png' />
      </div>
      {(mainWindow === 0) ? (<div className='buttonsBox'>
        <HomeButton title={lang(0)} description={lang(4)} />
        <HomeButton title={lang(1)} description={lang(5)} />
        <HomeButton title={lang(2)} description={lang(6)} />
        <HomeButton title={lang(3)} description={lang(7)} />
      </div>) : (
        <div></div>
      )}

    </div>
  )
}
export default Home;