import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { FormattedMessage, useIntl } from 'react-intl'
import useCoins from '../../api/useCoins'
import { ICoinSelectorPros } from './types'

const CoinSelector = (props: ICoinSelectorPros) => {
  const intl = useIntl()
  const { data, isError, error } = useCoins()

  return (
    <>
      {isError ? (
        <span>
          <FormattedMessage id="generic.label.error" defaultMessage="Error" />
          {error?.message}
        </span>
      ) : (
        <Box>
          <FormControl
            fullWidth
            sx={{
              menuPaper: {
                maxHeight: '100px',
              },
            }}
          >
            <InputLabel id="coin-selector-label">
              <FormattedMessage
                id="generic.label.coins"
                defaultMessage="Coin"
              />
            </InputLabel>
            <Select
              labelId="coin-selector-label"
              id="coin-selector"
              label={intl.formatMessage({
                id: 'generic.label.coins',
              })}
              onChange={e => {
                props.setFieldValue('coin', e.target.value)
              }}
              MenuProps={{
                style: {
                  maxHeight: '300px',
                },
              }}
              defaultValue=""
            >
              {data?.map(coin => (
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
          {props.messageError && props.touched ? (
            <span style={{ color: '#FC4F4F' }}>{props.messageError}</span>
          ) : null}
        </Box>
      )}
    </>
  )
}

export default CoinSelector
