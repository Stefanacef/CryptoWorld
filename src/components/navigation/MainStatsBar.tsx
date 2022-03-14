import { Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'

interface IStatsBar {
  name: string
  value: number
}

const useStyle = makeStyles(() => ({
  span: {
    color: 'white',
  },
}))

export default function MainStatsBar() {
  const content: IStatsBar[] = [
    { name: 'Cryptos', value: 1000 },
    { name: 'Market Cap', value: 19827660596 },
    { name: ' 24h Real Volume', value: 77460311771 },
    { name: 'Dominance : BTC', value: 42.3 },
    { name: 'Exchanges ', value: 100 },
  ]
  const className = useStyle()

  return (
    <Grid container justifyContent="center" columnGap={4}>
      {content.map((value, index) => (
        <Grid item key={index}>
          <span key={index} className={className.span}>
            {value.name} : {value.value}
          </span>
        </Grid>
      ))}
    </Grid>
  )
}
