import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import LanguageSelector from './LanguageSelector'

const NavigationLinks = () => {
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
    <div className="navigation-links">
      {links.map((link, index) => (
        <Link to={link.path} key={index}>
          {link.name}
        </Link>
      ))}
      <Link to="/signup">
        <button type="submit" className="navigation-button">
          <FormattedMessage
            id="navigation.link.signup"
            defaultMessage="Sign up"
          />
        </button>
      </Link>
      <LanguageSelector />
    </div>
  )
}

export default NavigationLinks
