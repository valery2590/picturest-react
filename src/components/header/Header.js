import "./Header.css";
import Logo from "../../assets/logo.png";

const Header = ({ user }) => {
  return (
    <div className="header__container">
      <div className="header__logo">
        <img src={Logo} alt="Picturest Logo" />
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
