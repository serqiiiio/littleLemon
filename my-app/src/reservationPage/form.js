import { useFormik } from "formik";
import * as Yup from "yup";
import { useReducer } from "react";

const initialValues = {
  select_location: "",
  select_date: "",
  select_time: "",
  number_of_guests: "1",
  name: "",
  email: "",
  phone_number: "",
  special_ins: "",
  ocasion: "",
};

const validationSchema = Yup.object({
  select_location: Yup.string()
    .required("Location is required")
    .oneOf(["Miraflores", "Megacenter"], "Invalid location"),
  select_date: Yup.date().required("Date is required"),
  select_time: Yup.string().required("Time is required"),
  number_of_guests: Yup.number()
    .required("Number of guests is required")
    .min(1, "At least 1 guest"),
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  phone_number: Yup.string()
    .matches(/^\d+$/, "Phone number must be digits only")
    .required("Phone number is required"),
  special_ins: Yup.string().optional(),
  ocasion: Yup.string()
    .required("Occassion is required")
    .oneOf(["Birthday", "Anniversary"], "Invalid occasion"),
});

const Form = ({ updateTimes, initialState, submit }) => {
  const options = initialState.map((time) => (
    <option key={time}>{time}</option>
  ));
  const [state, dispatch] = useReducer(updateTimes, initialState);
  const handleTimeChange = (event) => {
    const newSelectedTime = event.target.value;
    dispatch({ type: "UPDATE_TIMES", selectedTime: newSelectedTime });
    formik.setFieldValue("select_time", newSelectedTime);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      submit(values);
    },
  });

  return (
    <div className="form-container">
      <h1>Book Now!</h1>
      <h3>To book a reservation, please fill out this form.</h3>
      <div className="form-content">
        <form autoComplete="off" onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <label htmlFor="select_location">Select Location</label>
            <select
              id="select_location"
              name="select_location"
              value={formik.values.select_location}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="">--Please choose an option--</option>
              <option value="Megacenter">Megacenter</option>
              <option value="Miraflores">Miraflores</option>
            </select>
            {formik.touched.select_location && formik.errors.select_location ? (
              <div className="error">{formik.errors.select_location}</div>
            ) : null}
          </div>
          <div className="second-group">
            <label htmlFor="date">Select Date</label>
            <input
              id="date"
              name="select_date"
              value={formik.values.select_date}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="date"
            />
            {formik.touched.select_date && formik.errors.select_date ? (
              <div className="error">{formik.errors.select_date}</div>
            ) : null}

            <label htmlFor="time">Select Time</label>
            <select
              id="time"
              name="select_time"
              onChange={handleTimeChange}
              onBlur={formik.handleBlur}
              value={state.selectedTime}
            >
              <option value="">--Please choose an option--</option>
              {options}
            </select>
            {formik.touched.select_time && formik.errors.select_time ? (
              <div className="error">{formik.errors.select_time}</div>
            ) : null}

            <label htmlFor="time">Occasion</label>
            <select
              id="ocasion"
              name="ocasion"
              value={formik.values.ocasion}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="">--Please choose an option--</option>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
            </select>
            {formik.touched.ocasion && formik.errors.ocasion ? (
              <div className="error">{formik.errors.ocasion}</div>
            ) : null}

            <label htmlFor="guests">Number Of Guests</label>
            <input
              id="guests"
              name="number_of_guests"
              value={formik.values.number_of_guests}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="number"
              placeholder="1"
              min="1"
              max="10"
            />
            {formik.touched.number_of_guests &&
            formik.errors.number_of_guests ? (
              <div className="error">{formik.errors.number_of_guests}</div>
            ) : null}

            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="error">{formik.errors.name}</div>
            ) : null}

            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="email"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}

            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              name="phone_number"
              value={formik.values.phone_number}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
            />
            {formik.touched.phone_number && formik.errors.phone_number ? (
              <div className="error">{formik.errors.phone_number}</div>
            ) : null}

            <label htmlFor="instructions">Special Instructions</label>
            <textarea
              id="instructions"
              name="special_ins"
              value={formik.values.special_ins}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              className="instructions"
            />
          </div>
          <div className="buttons">
            <button type="submit">Reserve Table</button>
            <button>Cancel </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
