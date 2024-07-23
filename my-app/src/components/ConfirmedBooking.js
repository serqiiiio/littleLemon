import { useLocation } from "react-router-dom";

const ConfirmedBooking = () => {
  const confirmMessage = (e) => {
    e.preventDefault();
    alert("Booking has been confirmed.");
  };
  const location = useLocation();
  const { formData } = location.state || {};
  return (
    <div className="confirmed-booking">
      <h1>Book Now!</h1>
      <h2>You’re almost done. Please review your details.</h2>
      <h3>Your reservation information:</h3>
      <div className="confirmed-data" onSubmit={confirmMessage}>
        <p>Selected Branch:</p>
        <p className="res"> {formData?.select_location}</p>
        <p>Occasion: {formData?.ocasion}</p>
        <p className="res">{formData?.ocasion}</p>
        <p>Selected Date:</p>
        <p className="res"> {formData?.select_date}</p>
        <p>Selected Time:</p>
        <p className="res"> {formData?.select_time}</p>
        <p>Number Of Guests:</p>
        <p className="res">{formData?.number_of_guests}</p>
        <p>Name:</p>
        <p className="res">{formData?.name}</p>
        <p>Email:</p>
        <p className="res">{formData?.email}</p>
        <p>Phone Number:</p>
        <p className="res">{formData?.phone_number}</p>
        <p>Special Ins:</p>
        <p className="res">{formData?.special_ins}</p>
      </div>
      <div className="buttons">
        <button type="submit">Proceed to checkout</button>
        <button>Cancel </button>
      </div>
    </div>
  );
};

export default ConfirmedBooking;
