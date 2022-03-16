import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Skeleton,
} from '@mui/material'
import { FormattedMessage, useIntl } from 'react-intl'
import { useQuery } from 'react-query'
import CoinSelector from './CoinSelector'
import { ICoinSelector } from './types'

const TransactionsForm = () => {
  const intl = useIntl()
  const URL: string = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false`

  const fetchCoins = async () => {
    const response = await fetch(URL)
    return response.json()
  }
  const { data, isLoading, isError, error } = useQuery<ICoinSelector[], Error>(
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
      ) : isLoading ? (
        <Skeleton
          variant="rectangular"
          width="50%"
          height="500px"
          animation="wave"
        />
      ) : (
        <Card
          sx={{
            width: '500px',
            minHeight: '550px',
            padding: '30px',
            textAlign: 'left',
          }}
        >
          <CardHeader
            title={intl.formatMessage({
              id: 'transaction.title',
            })}
          />
          <CardContent>
            <CoinSelector data={data} />
          </CardContent>
          <CardActions
            disableSpacing
            sx={{ paddingLeft: '16px', marginTop: '15px' }}
          >
            <Button variant="outlined" onClick={() => console.log('buna')}>
              <FormattedMessage
                id="generic.label.submit"
                defaultMessage="Submit"
              />
            </Button>
          </CardActions>
        </Card>
      )}
    </>
  )
}

export default TransactionsForm
