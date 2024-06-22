import "./App.css";
import Navbar from "./components/Nav";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import ReservationPage from "./reservationPage/ReservationPage";

function App() {
  return (
    <div>
      <meta name="Little Lemon" content="A Bolivian restaurant" />
      <meta name="og:title" content="Little Lemon" />
      <meta name="og:description" content="A place to eat top Bolivian Food" />
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" />
        <Route path="/menu" />
        <Route path="/reservation" element={<ReservationPage />} />
        <Route path="/order" />
        <Route path="/login" />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
