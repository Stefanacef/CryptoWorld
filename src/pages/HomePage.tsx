import Carousel from '../components/carousel/Carousel'
import CoinCard from '../components/cards/CoinCard'
import CoinsTable from '../components/tables/CoinsTable'
import { Grid, Box, Card, Skeleton } from '@mui/material'
import { useQuery } from 'react-query'
import { FormattedMessage } from 'react-intl'

interface ICryptoCoin {
  id: string
  name: string
  image: string
  current_price: string
}

export default function HomePage() {
  const URL: string = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false`

  const fetchCoins = async () => {
    const response = await fetch(URL)
    return response.json()
  }
  const { data, isLoading, isError, error } = useQuery<ICryptoCoin[], Error>(
    'coins',
    fetchCoins
  )

  const topFiveCoins = data?.slice(-5)

  return (
    <Box m="30px">
      {isError ? (
        <span>
          <FormattedMessage id="generic.label.error" defaultMessage="Error" />
          {error?.message}
        </span>
      ) : (
        <>
          <Card>
            <Box p="30px">
              <Carousel>
                <Grid container columnGap="15px" rowGap="15px">
                  {isLoading
                    ? Array.from(new Array(5)).map((skeletonCoin, index) => (
                        <Skeleton
                          key={index}
                          variant="rectangular"
                          width={170}
                          height={170}
                          animation="wave"
                        />
                      ))
                    : topFiveCoins?.map((crypto: ICryptoCoin) => (
                        <Grid item key={crypto.id}>
                          <CoinCard
                            border=" border border-purple"
                            title={crypto.name}
                            icon={crypto.image}
                            price={crypto.current_price}
                          />
                        </Grid>
                      ))}
                </Grid>
              </Carousel>
            </Box>
          </Card>
          <Box mt="30px">
            {isLoading ? (
              <Skeleton
                variant="rectangular"
                width="100%"
                height="500px"
                animation="wave"
              />
            ) : (
              <CoinsTable data={data} />
            )}
          </Box>
        </>
      )}
    </Box>
  )
}
