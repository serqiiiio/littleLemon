import "./components.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="nav">
        <div className="container">
          <img src="./images/Logo.svg" alt="Logo" className="logo"></img>
          <ul className="navlinks">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/reservation">Reservation</Link>
            </li>
            <li>
              <Link to="/order">Order Online</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
