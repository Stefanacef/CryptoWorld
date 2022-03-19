import { TextField } from '@mui/material'
import { useIntl } from 'react-intl'

const FilterByName = ({ column }: any) => {
  const { filterValue, setFilter } = column
  const intl = useIntl()
  return (
    <TextField
      id="standard-basic"
      label={intl.formatMessage({ id: 'generic.label.search' })}
      value={filterValue || ''}
      variant="standard"
      onChange={e => setFilter(e.target.value)}
      onClick={e => e.stopPropagation()}
    />
  )
}

export default FilterByName
