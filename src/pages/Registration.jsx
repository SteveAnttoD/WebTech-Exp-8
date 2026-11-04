import { useState } from "react";
import FormField from "../components/FormField.jsx";

const initialForm = {
  fullName: "",
  email: "",
  password: "",
  age: "",
  mobile: "",
  gender: "",
  state: "",
};

const states = [
  "Andhra Pradesh",
  "Delhi",
  "Gujarat",
  "Karnataka",
  "Kerala",
  "Maharashtra",
  "Tamil Nadu",
  "Telangana",
  "Uttar Pradesh",
  "West Bengal",
];

function validateField(name, value) {
  switch (name) {
    case "fullName":
      if (!value.trim()) return "Full name is required.";
      return /^[A-Za-z ]+$/.test(value.trim())
        ? ""
        : "Use letters and spaces only.";
    case "email":
      if (!value.trim()) return "Email address is required.";
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
        ? ""
        : "Enter a valid email address.";
    case "password":
      if (!value) return "Password is required.";
      return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(value)
        ? ""
        : "Use at least 8 characters with uppercase, lowercase, and a number.";
    case "age":
      if (!value) return "Age is required.";
      return Number.isInteger(Number(value)) &&
        Number(value) >= 18 &&
        Number(value) <= 30
        ? ""
        : "Age must be between 18 and 30.";
    case "mobile":
      if (!value) return "Mobile number is required.";
      return /^\d{10}$/.test(value)
        ? ""
        : "Mobile number must contain exactly 10 digits.";
    case "gender":
      return value ? "" : "Please select a gender.";
    case "state":
      return value ? "" : "Please select a state.";
    default:
      return "";
  }
}

export default function Registration() {
  const [form, setForm] = useState(initialForm);
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const errors = Object.fromEntries(
    Object.entries(form).map(([name, value]) => [
      name,
      validateField(name, value),
    ]),
  );
  const isFormValid = Object.values(errors).every((error) => !error);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setSubmitted(false);
  }

  function handleBlur(event) {
    setTouched((current) => ({ ...current, [event.target.name]: true }));
  }

  function fieldProps(name) {
    return {
      id: name,
      name,
      value: form[name],
      onChange: handleChange,
      onBlur: handleBlur,
      "aria-invalid": Boolean(touched[name] && errors[name]),
      "aria-describedby": touched[name] && errors[name] ? `${name}-error` : undefined,
    };
  }

  function handleSubmit(event) {
    event.preventDefault();
    setTouched(
      Object.fromEntries(Object.keys(form).map((field) => [field, true])),
    );
    if (isFormValid) {
      setSubmitted(true);
      setForm(initialForm);
      setTouched({});
    }
  }

  return (
    <section className="container page-section">
      <div className="section-heading">
        <p className="eyebrow">TAKE THE FIRST STEP</p>
        <h1>Student registration</h1>
        <p>Fill in your details to join the EduPortal learning community.</p>
      </div>

      <form className="registration-form" onSubmit={handleSubmit} noValidate>
        <div className="form-grid">
          <FormField
            label="Full name"
            name="fullName"
            error={touched.fullName ? errors.fullName : ""}
          >
            <input
              {...fieldProps("fullName")}
              type="text"
              autoComplete="name"
              placeholder="e.g. Alex Morgan"
            />
          </FormField>
          <FormField
            label="Email"
            name="email"
            error={touched.email ? errors.email : ""}
          >
            <input
              {...fieldProps("email")}
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
            />
          </FormField>
          <FormField
            label="Password"
            name="password"
            error={touched.password ? errors.password : ""}
          >
            <input
              {...fieldProps("password")}
              type="password"
              autoComplete="new-password"
              placeholder="At least 8 characters"
            />
          </FormField>
          <FormField
            label="Age"
            name="age"
            error={touched.age ? errors.age : ""}
          >
            <input
              {...fieldProps("age")}
              type="number"
              min="18"
              max="30"
              step="1"
              placeholder="18–30"
            />
          </FormField>
          <FormField
            label="Mobile number"
            name="mobile"
            error={touched.mobile ? errors.mobile : ""}
          >
            <input
              {...fieldProps("mobile")}
              type="tel"
              inputMode="numeric"
              maxLength="10"
              placeholder="10-digit number"
            />
          </FormField>
          <FormField
            label="Gender"
            name="gender"
            error={touched.gender ? errors.gender : ""}
          >
            <select {...fieldProps("gender")}>
              <option value="">Select gender</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="nonbinary">Non-binary</option>
              <option value="prefer-not-to-say">Prefer not to say</option>
            </select>
          </FormField>
          <FormField
            label="State"
            name="state"
            error={touched.state ? errors.state : ""}
          >
            <select {...fieldProps("state")}>
              <option value="">Select state</option>
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </FormField>
        </div>
        <div className="form-actions">
          <button className="button" type="submit" disabled={!isFormValid}>
            Submit registration
          </button>
          {!isFormValid && (
            <p className="form-hint">Complete all fields correctly to submit.</p>
          )}
        </div>
        {submitted && (
          <p className="success-message" role="status">
            Registration successful! Welcome to EduPortal.
          </p>
        )}
      </form>
    </section>
  );
}
