import "./App.css";
import Navbar from "./components/Nav";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Form from "./reservationPage/form";
import { useState } from "react";
import { fetchAPI, submitAPI } from "./components/api";
import ConfirmedBooking from "./components/ConfirmedBooking";
import { useNavigate } from "react-router-dom";

export const updateTimes = (date) => {
  const dateObj = new Date(date);
  return fetchAPI(dateObj);
};

export const initialState = (date) => {
  return fetchAPI(date);
};

function App() {
  const navigate = useNavigate();
  const submitForm = (formData) => {
    const isSubmitted = submitAPI(formData);
    if (isSubmitted) {
      navigate("/confirmed", { state: { formData: formData } });
    }
  };
  const [date, setDate] = useState(new Date());
  return (
    <>
      <meta name="Little Lemon" content="A Bolivian restaurant" />
      <meta name="og:title" content="Little Lemon" />
      <meta name="og:description" content="A place to eat top Bolivian Food" />
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" />
        <Route path="/menu" />
        <Route
          path="/reservation"
          element={
            <Form
              updateTimes={updateTimes}
              initialState={initialState(date)}
              submit={submitForm}
            />
          }
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
        <Route path="/order" />
        <Route path="/login" />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
