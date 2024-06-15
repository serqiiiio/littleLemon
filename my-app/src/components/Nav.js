import "./components.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="container">
        <img src="./images/Logo.svg" alt="Logo" className="logo"></img>
        <ul className="navlinks">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/menu">Menu</a>
          </li>
          <li>
            <a href="/reservation">Reservation</a>
          </li>
          <li>
            <a href="/order">Order Online</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
