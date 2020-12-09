import "./Header.css";
import Logo from "../../assets/logo.png";
import {Link} from "react-router-dom";

const Header = ({ user }) => {
  return (
    <div className="header__container">
      <div className="header__logo">
          <Link to="/">
              <img src={Logo} alt="Picturest Logo" />
          </Link>
      </div>
      <div className="header_userInfo__container">
        <img
          src={user.avatar}
          className="header_userInfo__image"
          alt="User avatar"
        />
      </div>
    </div>
  );
};

export default Header;
