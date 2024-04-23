import globalData from '../../../globalData';
import './languageSelect.css';
const LanguageSelect: React.FC = () => {
  const languagesList = globalData.languages;
  return (
    <select className='languageSelect'>
      {languagesList.map(lang => {
        return <option value={lang[1]} key={lang[1]}>{lang[0]}</option>
      })}
    </select>
  )
}
export default LanguageSelect;