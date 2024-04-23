import { useState } from 'react';
import globalData from '../../../globalData';
import './languageSelect.css';
import { Language } from '../../../model';
import { useGlobalContext } from '../../../globalContext';
const LanguageSelect: React.FC = () => {
  const [actualLanguageSelected, setActualLanguageSelected] = useState<Language>("en");
  const { setActualLanguage } = useGlobalContext();
  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const selectedOption = e.target.value as Language;
    setActualLanguageSelected(selectedOption);
    setActualLanguage(selectedOption);
  }
  const languagesList = globalData.languages;
  return (
    <select className='languageSelect' value={actualLanguageSelected} onChange={handleChange}>
      {languagesList.map(lang => {
        return <option value={lang[1]} key={lang[1]}>{lang[0]}</option>
      })}
    </select>
  )
}
export default LanguageSelect;