import './home.css';
import { useEffect } from 'react';
import HomeButton from './homeButton/homeButton';
import { useState } from 'react';
import LanguageSelect from './languageSelect/languageSelect';
import lang from '../../lang';
import DimensionsBox from './dimensionsBox/dimensionsBox';
import globalData from '../../globalData';
const Home: React.FC = () => {
  const [mainWindow, setMainWindow] = useState<number>(0);
  useEffect(() => {
    // Fade in effect
    globalData.fade((mainWindow === 0) ? 'buttonsBox' : 'dimensionsBox', 'appear');
  }, [mainWindow])
  return (
    <div className='homeScreen'>
      <div className='titleBox'>
        <LanguageSelect />
        <img src='/logo.png' />
      </div>
      {(mainWindow === 0) ? (<div className='buttonsBox'>
        <HomeButton title={lang(0)} description={lang(4)} onClick={() => {
          globalData.fade('buttonsBox', 'disappear');
          setTimeout(() => setMainWindow(1), 1000);
        }} />
        <HomeButton title={lang(1)} description={lang(5)} />
        <HomeButton title={lang(2)} description={lang(6)} />
        <HomeButton title={lang(3)} description={lang(7)} />
      </div>) : (
        <div className='dimensionsBox'>
          <button className='button dimensionsBackButton' onClick={() => {
            globalData.fade('dimensionsBox', 'disappear');
            setTimeout(() => setMainWindow(0), 1000);
          }}>
            <img src='/icons/undo.svg' className='icon' />
          </button>
          <span className='dimensionsBoxDescription'>{lang(8)}</span>
          <DimensionsBox axis='X' />
          <DimensionsBox axis='Y' />
          <button className='button dimensionsCreateButton'><span>{lang(9)}</span></button>
        </div>
      )}

    </div>
  )
}
export default Home;