import "../../assets/styles/Navigation/Navigation.css";
import Logo2 from "../../assets/images/logo2.png";

function TopNavigation() {
  const links: string[] = ["Coins", "Research", "Exchanges", "Feed"];
  return (
    <nav className="navigation-top">
      <img className="navigation-logo" src={Logo2} alt="logo" />
      <div className="navigation-links">
        {links.map((el, index) => (
          <a href="#" key={index}>
            {el}
          </a>
        ))}
        <button type="submit" className="navigation-button">
          Sing up{" "}
        </button>
      </div>
    </nav>
  );
}

export default TopNavigation;
