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

const LanguageSelector = () => {
  const [language, setLanguage] = useRecoilState(languageAtom)

  return (
    <FormControl size="small">
      <InputLabel id="select-language">
        <FormattedMessage
          id="generic.label.language"
          defaultMessage="Language"
        />
      </InputLabel>
      <Select
        sx={{ fontSize: '12px' }}
        labelId="select-language"
        id="select-language"
        value={language}
        label="Language"
        onChange={(e: SelectChangeEvent) => setLanguage(e.target.value)}
      >
        <MenuItem value="en" sx={{ fontSize: '12px' }}>
          <FormattedMessage
            id="language.selector.english"
            defaultMessage="English"
          />
        </MenuItem>
        <MenuItem value="ro" sx={{ fontSize: '12px' }}>
          <FormattedMessage
            id="language.selector.romanian"
            defaultMessage="Romanian"
          />
        </MenuItem>
      </Select>
    </FormControl>
  )
}

export default LanguageSelector
