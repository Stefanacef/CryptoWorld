import Carousel from '../components/carousel/Carousel'
import CoinCard from '../components/cards/CoinCard'
import CoinsTable from '../components/tables/CoinsTable'
import { useEffect, useState } from 'react'
import { Grid, Box, Card } from '@mui/material'

interface ICryptoCoin {
  id: string
  name: string
  image: string
  current_price: string
}
export default function HomePage() {
  const [data, setData] = useState<ICryptoCoin[]>([])
  const URL: string = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false`

  useEffect(() => {
    fetch(URL)
      .then(date => date.json())
      .then(setData)
      .catch(err => {
        console.error(err)
      })
  }, [URL])

  const topFiveCoins = data.slice(-5)

  return (
    <Box m="30px">
      <Card>
        <Box p="30px">
          <Carousel>
            <Grid container columnGap="15px" rowGap="15px">
              {topFiveCoins.map((crypto: ICryptoCoin) => (
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
    </Box>
  )
}
