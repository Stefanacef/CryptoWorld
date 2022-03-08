import { useRecoilState } from 'recoil'
import { languageAtom } from '../../i18n/state'
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material'
import { FormattedMessage } from 'react-intl'
import { makeStyles } from '@mui/styles'

const useStyle = makeStyles(() => ({
  menuItem: {
    fontSize: '12px',
  },
}))

const LanguageSelector = () => {
  const [language, setLanguage] = useRecoilState(languageAtom)
  const className = useStyle()
  return (
    <FormControl size="small">
      <InputLabel id="select-language">
        <FormattedMessage id="language" defaultMessage="Language" />
      </InputLabel>
      <Select
        className={className.menuItem}
        labelId="select-language"
        id="select-language"
        value={language}
        label="Language"
        onChange={(e: SelectChangeEvent) => setLanguage(e.target.value)}
      >
        <MenuItem value="en" className={className.menuItem}>
          <FormattedMessage id="language-english" defaultMessage="English" />
        </MenuItem>
        <MenuItem value="ro" className={className.menuItem}>
          <FormattedMessage id="language-romanian" defaultMessage="Romanian" />
        </MenuItem>
      </Select>
    </FormControl>
  )
}

export default LanguageSelector
