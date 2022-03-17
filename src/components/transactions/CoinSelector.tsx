import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { FormattedMessage, useIntl } from 'react-intl'
import { useQuery } from 'react-query'
import { ICoinSelector, ICoinSelectorPros } from './types'

const CoinSelector = (props: ICoinSelectorPros) => {
  const intl = useIntl()
  const URL: string = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false`
  const fetchCoins = async () => {
    const response = await fetch(URL)
    return response.json()
  }
  const { data, isError, error } = useQuery<ICoinSelector[], Error>(
    'coins',
    fetchCoins
  )
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
          <Box>
            {props.errors.coin && props.touched.coin ? (
              <span style={{ color: '#FC4F4F' }}>
                <FormattedMessage
                  id={props.errors.coin}
                  defaultMessage="This filed is required"
                />
              </span>
            ) : null}
          </Box>
        </Box>
      )}
    </>
  )
}

export default CoinSelector
