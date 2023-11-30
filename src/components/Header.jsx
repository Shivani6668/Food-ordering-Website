import Logo from "../Images/Logo.jpg"

const Title = () => (
    <a href="/">
      <img className="logo" src={Logo} alt="Logo" />
    </a>
  );
  
  const Header = () => {
    return (
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li><i class="fa-solid fa-cart-shopping"></i></li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header