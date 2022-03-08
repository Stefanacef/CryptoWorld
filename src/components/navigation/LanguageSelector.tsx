import { useRecoilState } from 'recoil'
import { languageAtom } from '../../i18n/state'

const LanguageSelector = () => {
  const [language, setLanguage] = useRecoilState(languageAtom)

  return (
    <select
      value={language}
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
        setLanguage(e.target.value)
      }
    >
      <option value="en">en</option>
      <option value="ro">ro</option>
    </select>
  )
}

export default LanguageSelector
