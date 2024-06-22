import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const initialValues = {
  select_location: "",
  select_date: "",
  select_time: "",
  number_of_guests: "",
  name: "",
  email: "",
  phone_number: "",
  special_ins: "",
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
});

const Form = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/");
  };

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
            <input
              id="time"
              name="select_time"
              value={formik.values.select_time}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="time"
            />
            {formik.touched.select_time && formik.errors.select_time ? (
              <div className="error">{formik.errors.select_time}</div>
            ) : null}

            <label htmlFor="guests">Number Of Guests</label>
            <input
              id="guests"
              name="number_of_guests"
              value={formik.values.number_of_guests}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="number"
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
            <button onClick={handleRedirect}>Cancel </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
