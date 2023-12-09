import { useContext, useEffect, useState } from "react";
import Logo from "../Images/Logo.jpg";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext"
import { BsBagPlusFill } from "react-icons/bs";
import { useSelector } from "react-redux";



const Title = () => (
  <a href="/">
    <img className="logo" src={Logo} alt="Logo" />
  </a>
);

const Header = () => {
  const [login, setLogin] = useState("Login");


const {loggedInUser} = useContext(UserContext)
// console.log(loggedInUser);

// subscribing to the  store using a selector
const cartItems = useSelector((store)=>store.cart.items)
// console.log(cartItems);

return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
{/* <li>{loggedInUser}</li> */}


          <li>
        <Link  to="/">Home</Link>
        </li>
        <li>
          <Link  to="/about">About</Link>
          </li>
          <li>
          <Link to="/contact">Contact</Link>
          </li>
        <li>  <button 
            onClick={() => {
              login === "Login" ? setLogin("LogOut") : setLogin("Login");
            }}
            className="login-btn"
          >
            <li>{login}</li>
          </button></li>
          <li>
          <Link to="/cart"> <i className="fa-solid fa-cart-shopping">Cart: ({cartItems.length} item)</i>
           </Link>
            

          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
