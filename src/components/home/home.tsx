import './home.css';
import HomeButton from './homeButton/homeButton';
import { useState } from 'react';
import LanguageSelect from './languageSelect/languageSelect';
import lang from '../../lang';
import DimensionsBox from './dimensionsBox/dimensionsBox';
const Home: React.FC = () => {
  const [mainWindow, setMainWindow] = useState<number>(0);
  return (
    <div className='homeScreen'>
      <div className='titleBox'>
        <LanguageSelect />
        <img src='/logo.png' />
      </div>
      {(mainWindow === 0) ? (<div className='buttonsBox'>
        <HomeButton title={lang(0)} description={lang(4)} onClick={() => {
          setMainWindow(1);
        }} />
        <HomeButton title={lang(1)} description={lang(5)} />
        <HomeButton title={lang(2)} description={lang(6)} />
        <HomeButton title={lang(3)} description={lang(7)} />
      </div>) : (
        <div className='dimensionsBox'>
          <button className='button dimensionsBackButton' onClick={() => {
            setMainWindow(0);
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