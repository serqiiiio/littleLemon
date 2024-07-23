import { Routes, Route, useNavigate } from "react-router-dom";
import Form from "../reservationPage/form";
const HeroSection = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/reservation");
  };

  return (
    <div className="hero-section">
      <div className="left-hero-section">
        <h1>Little Lemon</h1>
        <h2>La Paz</h2>
        <p>
          We are a family owned Bolivian restaurant, focused on traditional
          recipes served with a modern twist
        </p>
        <button onClick={handleRedirect}>Reserve Table</button>
      </div>
      <div className="hero-section-img">
        <img src="./images/restauranfood.jpg" alt="hero section food"></img>
      </div>
    </div>
  );
};

const HighLights = () => {
  return (
    <div className="highlights">
      <div className="highlights-header">
        <h1>This week specials!</h1>
        <button>Online menu</button>
      </div>
      <div className="highlights-body">
        <div className="products first">
          <img src="./images/greek salad.jpg" alt="greek salad"></img>
          <div className="description">
            <div className="header-title-price">
              <h2>Greek Salad</h2>
              <h2 className="price">$12.99</h2>
            </div>
            <p>
              {" "}
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.
            </p>
            <div className="order-now">
              <h2>Order a delivery</h2>
            </div>
          </div>
        </div>
        <div className="products second">
          <img src="./images/bruchetta.svg" alt="bruchetta"></img>
          <div className="description">
            <div className="header-title-price">
              <h2>Brucheta</h2>
              <h2 className="price">$5.99</h2>
            </div>
            <p>
              {" "}
              Our Bruschetta is made from grilled bread that has been smeared
              with garlic and seasoned with salt and olive oil.
            </p>
            <div className="order-now">
              <h2>Order a delivery</h2>
            </div>
          </div>
        </div>
        <div className="products third">
          <img src="./images/lemon dessert.jpg" alt="lemon dessert"></img>
          <div className="description">
            <div className="header-title-price">
              <h2>Lemon Desert</h2>
              <h2 className="price">$5</h2>
            </div>
            <p>
              {" "}
              This comes straight from grandma’s recipe book, every last
              ingredient has been sourced and is as authentic as can be
              imagined.
            </p>
            <div className="order-now">
              <h2>Order a delivery</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Main = () => {
  return (
    <>
      <HeroSection />
      <Routes>
        <Route path="/about" element={<Main />} />
        <Route path="/reservation" element={<Form />} />
      </Routes>
      <HighLights />
    </>
  );
};

export default Main;
