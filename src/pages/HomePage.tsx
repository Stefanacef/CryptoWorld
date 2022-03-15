import Carousel from '../components/carousel/Carousel'
import CoinCard from '../components/cards/CoinCard'
import CoinsTable from '../components/tables/CoinsTable'
import { Grid, Box, Card } from '@mui/material'
import { useQuery } from 'react-query'

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
  const { data, isLoading, isError, error, isIdle } = useQuery<
    ICryptoCoin[],
    Error
  >('coins', fetchCoins)

  const topFiveCoins = data?.slice(-5)

  return (
    <Box m="30px">
      {isIdle ? (
        'Not ready...'
      ) : isLoading ? (
        <span>Loading...</span>
      ) : isError ? (
        <span>Error: {error?.message}</span>
      ) : (
        <>
          <Card>
            <Box p="30px">
              <Carousel>
                <Grid container columnGap="15px" rowGap="15px">
                  {topFiveCoins?.map((crypto: ICryptoCoin) => (
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
            <CoinsTable data={data} />
          </Box>
        </>
      )}
    </Box>
  )
}
