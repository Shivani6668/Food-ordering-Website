import { useEffect, useState } from "react";
import Logo from "../Images/Logo.jpg";
import { Link } from "react-router-dom";

const Title = () => (
  <a href="/">
    <img className="logo" src={Logo} alt="Logo" />
  </a>
);

const Header = () => {
  const [login, setLogin] = useState("Login");

  console.log("header ");
useEffect(()=>{
  console.log("useeffect");
},[login])


  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
        <Link className="li" to="/"><li>Home</li></Link>
          <Link className="li" to="/about"><li>About</li></Link>
          <Link className="li" to="/contact"><li>Contact</li></Link>
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
