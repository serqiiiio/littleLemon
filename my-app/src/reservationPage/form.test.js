import { render, screen, fireEvent } from "@testing-library/react";
import Form from "./form";
import { initialState, updateTimes } from "../App";

test("Renders the BookingForm heading", () => {
  render(
    <Form
      updateTimes={updateTimes}
      initialState={initialState(new Date())}
      submit
    />
  );
  const headingElement = screen.getByText(/Book Now!/i);
  expect(headingElement).toBeInTheDocument();
});

test("initialState function returns correct initial state", () => {
  const expectedState = [
    "17:00",
    "17:30",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
    "22:00",
    "23:30",
  ];
  const state = initialState(new Date());
  console.log(state);
  expect(state).toEqual(expectedState);
});

test("Verify updateTimes functionality", () => {
  const expectedState = [
    "17:00",
    "17:30",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
    "22:00",
    "23:30",
  ];
  const newDate = updateTimes(new Date());
  console.log(newDate);
  expect(newDate).toEqual(expectedState);
});

test("Render inputs from Forms", () => {
  render(
    <Form
      updateTimes={updateTimes}
      initialState={initialState(new Date())}
      submit
    />
  );
  expect(screen.getByLabelText(/Select Location/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Select Date/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Select Time/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Number Of Guests/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Phone Number/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Special Instructions/i)).toBeInTheDocument();
});

test("submits form with valid data", () => {
  render(
    <Form
      updateTimes={updateTimes}
      initialState={initialState(new Date())}
      submit
    />
  );

  fireEvent.change(screen.getByLabelText(/Name/i), {
    target: { value: "John Doe" },
  });
  fireEvent.change(screen.getByLabelText(/Email/i), {
    target: { value: "john@example.com" },
  });
  fireEvent.change(screen.getByLabelText(/Number Of Guests/i), {
    target: { value: "2" },
  });

  fireEvent.click(screen.getByText(/Reserve Table/i));
});

test("validates input fields", async () => {
  render(
    <Form
      updateTimes={updateTimes}
      initialState={initialState(new Date())}
      submit
    />
  );

  const nameInput = screen.getByLabelText(/Name/i);
  fireEvent.change(nameInput, { target: { value: "" } });
  fireEvent.blur(nameInput);

  expect(await screen.findByText(/name is required/i)).toBeInTheDocument();

  const emailInput = screen.getByLabelText(/Email/i);
  fireEvent.change(emailInput, { target: { value: "invalid-email" } });
  fireEvent.blur(emailInput);

  expect(await screen.findByText(/invalid email/i)).toBeInTheDocument();
});
