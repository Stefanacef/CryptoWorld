import { TextField } from '@mui/material'
import { useIntl } from 'react-intl'
import { ITextInput } from './types'

const TextInput = (props: ITextInput) => {
  const intl = useIntl()
  return (
    <TextField
      id={props.id}
      name={props.name}
      label={intl.formatMessage({
        id: props.label,
      })}
      type="text"
      variant={props.variant ? props.variant : 'filled'}
      value={props.value}
      onChange={props.onChange}
      fullWidth={props.fullWidth}
    />
  )
}
export default TextInput
