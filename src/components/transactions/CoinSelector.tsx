import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { FormattedMessage, useIntl } from 'react-intl'
import { ICoinSelector } from './types'

const CoinSelector = (props: { data: ICoinSelector[] | undefined }) => {
  const intl = useIntl()

  return (
    <FormControl
      fullWidth
      sx={{
        menuPaper: {
          maxHeight: '100px',
        },
      }}
    >
      <InputLabel id="coin-selector-label">
        <FormattedMessage id="generic.label.coins" defaultMessage="Coin" />
      </InputLabel>
      <Select
        labelId="coin-selector-label"
        id="coin-selector"
        value=""
        label={intl.formatMessage({
          id: 'generic.label.coins',
        })}
        onChange={() => {
          console.log('buna')
        }}
        MenuProps={{
          style: {
            maxHeight: '300px',
          },
        }}
      >
        {props?.data?.map(coin => (
          <MenuItem value={coin.id} key={coin.id}>
            <img
              src={coin.image}
              alt="coin"
              style={{ width: '20px', marginRight: '10px' }}
            />
            {coin.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default CoinSelector
