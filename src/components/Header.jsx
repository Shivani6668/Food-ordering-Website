import { useState } from "react";
import Logo from "../Images/Logo.jpg";

const Title = () => (
  <a href="/">
    <img className="logo" src={Logo} alt="Logo" />
  </a>
);

const Header = () => {
  const [login, setLogin] = useState("Login");

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <button
            onClick={() => {
              login === "Login" ? setLogin("LogOut") : setLogin("Login");
            }}
            className="login"
          >
            <li>{login}</li>
          </button>
          <li>
            <i class="fa-solid fa-cart-shopping"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
