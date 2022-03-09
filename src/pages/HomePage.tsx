import Carousel from '../components/carousel/Carousel'
import CoinCard from '../components/cards/Card'
import Table from '../components/tables/Table'
import { useEffect, useState } from 'react'
import { Grid } from '@mui/material'

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
    <Grid container>
      <Grid item xs={0} sm={1} md={2} />
      <Grid item container xs={12} sm={10} md={8} direction="column">
        <Grid item container>
          <Carousel>
            {topFiveCoins.map((crypto: ICryptoCoin) => (
              <CoinCard
                key={crypto.id}
                border=" border border-purple"
                title={crypto.name}
                icon={crypto.image}
                price={crypto.current_price}
              />
            ))}
          </Carousel>
        </Grid>
        <Grid item>
          <Table data={data} />
        </Grid>
      </Grid>
      <Grid item xs={0} sm={1} md={2} />
    </Grid>
  )
}
