import { Box, FormControl, MenuItem, Select } from '@mui/material'
import { useMemo } from 'react'
import { FormattedMessage } from 'react-intl'

const FilterByType = ({ column }: any) => {
  const { filterValue, setFilter } = column
  const options = useMemo(() => {
    const type = ['Buy', 'Sell']

    return type
  }, [])

  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: '10px',
        width: '70%',
      }}
    >
      <FormControl fullWidth>
        <Select
          labelId="type-selector-label"
          id="type-selector"
          onChange={e => {
            setFilter(e.target.value || undefined)
          }}
          onClick={e => e.stopPropagation()}
          value={filterValue || ''}
          size="small"
          sx={{ height: '30px' }}
        >
          <MenuItem value="">
            <FormattedMessage id="transaction.all" defaultMessage="All" />
          </MenuItem>
          {options.map((option, i) => (
            <MenuItem key={i} value={option}>
              {option === 'Buy' ? (
                <FormattedMessage id="transaction.buy" defaultMessage="Buy" />
              ) : (
                <FormattedMessage id="transaction.sell" defaultMessage="Sell" />
              )}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}

export default FilterByType
