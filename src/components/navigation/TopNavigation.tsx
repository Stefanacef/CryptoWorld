import '../../assets/styles/Navigation/Navigation.css'

function TopNavigation() {
  const links: string[] = ['Coins', 'Research', 'Exchanges', 'Feed']

  return (
    <nav className="navigation-top">
      <h3>LOGO</h3>
      <div className="navigation-links">
        {links.map((el, index) => (
          <a href="https://crypto-world-stefana.netlify.app/" key={index}>
            {el}
          </a>
        ))}
        <button type="submit" className="navigation-button">
          Sign up{' '}
        </button>
      </div>
    </nav>
  )
}

export default TopNavigation
