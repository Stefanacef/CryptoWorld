import { FC } from 'react'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import { Typography, Button, Grid } from '@mui/material'

type Props = {
  children?: JSX.Element[]
}

const Carousel: FC<Props> = ({ children }) => {
  return (
    <Grid container marginTop={20} direction="column" rowGap={3}>
      <Grid item alignSelf="flex-start">
        <Typography variant="h4" color="black">
          <FormattedMessage
            id="carousel.title"
            defaultMessage="Our favorite coins"
          />
        </Typography>
      </Grid>
      <Grid
        item
        container
        justifyContent="space-around"
        rowGap={2}
        flexWrap="wrap"
      >
        {children}
      </Grid>
      <Grid item alignSelf="flex-start">
        <Link to="/research">
          <Button variant="contained">
            <FormattedMessage id="button.why" defaultMessage="Sign up" />
          </Button>
        </Link>
      </Grid>
    </Grid>
  )
}

export default Carousel
