import { Link } from 'react-router-dom'

const NavigationLinks = () => {
  const links = [
    { name: 'Coins', path: '/' },
    { name: 'Research', path: '/research' },
    { name: 'Exchanges', path: '/exchanges' },
    { name: 'Feed', path: '/feed' },
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
          Sign up
        </button>
      </Link>
    </div>
  )
}

export default NavigationLinks
