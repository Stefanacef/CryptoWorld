import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import LanguageSelector from './LanguageSelector'
import { Grid, Button } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyle = makeStyles(() => ({
  linkStyle: {
    color: 'white',
    textDecoration: 'none',
  },
}))

const NavigationLinks = () => {
  const className = useStyle()
  const links = [
    {
      name: (
        <FormattedMessage id="navigation.link.coins" defaultMessage="Coins" />
      ),
      path: '/',
    },
    {
      name: (
        <FormattedMessage
          id="navigation.link.research"
          defaultMessage="Research"
        />
      ),
      path: '/research',
    },
    {
      name: (
        <FormattedMessage
          id="navigation.link.exchanges"
          defaultMessage="Exchanges"
        />
      ),
      path: '/exchanges',
    },
    {
      name: (
        <FormattedMessage id="navigation.link.feed" defaultMessage="Feed" />
      ),
      path: '/feed',
    },
  ]

  return (
    <Grid container columnGap={4} alignItems="center" justifyContent="flex-end">
      {links.map((link, index) => (
        <Grid item key={index}>
          <Link to={link.path} key={index} className={className.linkStyle}>
            {link.name}
          </Link>
        </Grid>
      ))}
      <Grid item>
        <Link to="/signup" className={className.linkStyle}>
          <Button variant="contained">
            <FormattedMessage
              id="navigation.link.signup"
              defaultMessage="Sign up"
            />
          </Button>
        </Link>
      </Grid>
      <Grid item>
        <LanguageSelector />
      </Grid>
    </Grid>
  )
}

export default NavigationLinks
