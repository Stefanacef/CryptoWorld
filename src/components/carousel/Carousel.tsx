import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import { Typography, Button, Box } from '@mui/material'

const Carousel: FC = ({ children }) => {
  const navigate = useNavigate()
  return (
    <>
      <Box textAlign="left">
        <Typography variant="h4" color="black">
          <FormattedMessage
            id="carousel.title"
            defaultMessage="Our favorite coins"
          />
        </Typography>
      </Box>
      <Box m="30px 0"> {children}</Box>
      <Box textAlign="left">
        <Button variant="contained" onClick={() => navigate('/research')}>
          <FormattedMessage id="button.why" defaultMessage="Sign up" />
        </Button>
      </Box>
    </>
  )
}

export default Carousel
