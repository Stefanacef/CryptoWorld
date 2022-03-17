import Carousel from '../components/carousel/Carousel'
import CoinCard from '../components/cards/CoinCard'
import CoinsTable from '../components/coin/table/CoinsTable'
import { Grid, Box, Card, Skeleton } from '@mui/material'
import { FormattedMessage } from 'react-intl'
import useCoins from '../api/useCoins'

interface ICryptoCoin {
  id: string
  name: string
  image: string
  current_price: string
}

export default function HomePage() {
  const { data, isLoading, isError, error } = useCoins()
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
              data && <CoinsTable data={data} />
            )}
          </Box>
        </>
      )}
    </Box>
  )
}
