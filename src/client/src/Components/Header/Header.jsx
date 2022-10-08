import logo from "../../Assets/Images/testLogo.svg";
import profileLogo from "../../Assets/Images/profile.svg";
import "./header.scss";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <img className="nav-menu__logo" src={logo} alt="logo" />
          <nav className="nav-menu">
            <a className="nav-menu__item" href="#">
              Ивенты
            </a>
            <a className="nav-menu__item" href="#">
              Магазин
            </a>
            <a className="nav-menu__item" href="#">
              <img
                className="nav-menu__item--profile"
                src={profileLogo}
                alt=""
              />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
