import React, { useState } from "react";
import "./signup.css";

function SignUpForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [passwordLength, setPasswordLength] = useState(0);

  function handleSubmit(event) {
    event.preventDefault();
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
    console.log("Phone Number:", phoneNumber);
    console.log("City:", city);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
    setPasswordLength(event.target.value.length);
  }

  return (
    <div className="signup-container">
      <div className="signup-form__card">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="signup-form__input-container">
            <label htmlFor="first-name">First Name:</label>
            <input
              type="text"
              id="first-name"
              placeholder="Enter your first name"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
          </div>

          <div className="signup-form__input-container">
            <label htmlFor="last-name">Last Name:</label>
            <input
              type="text"
              id="last-name"
              placeholder="Enter your last name"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
          </div>

          <div className="signup-form__input-container">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <div className="signup-form__input-container">
            <label htmlFor="password">Password:</label>
            <div className="password-input-container">
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={handlePasswordChange}
              />
              <div className="password-strength-bar">
                <div
                  className="password-strength-bar__indicator"
                  style={{ width: `${(passwordLength / 50) * 100}%` }}
                />
              </div>
            </div>
          </div>

          <div className="signup-form__input-container">
            <label htmlFor="confirm-password">Confirm Password:</label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
          </div>

          <div className="signup-form__input-container">
            <label htmlFor="phone-number">Phone Number:</label>
            <input
              type="tel"
              id="phone-number"
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
            />
          </div>
          <div className="signup-form__input-container">
            <label htmlFor="city">City:</label>
            <input
              type="text"
              id="city"
              placeholder="Enter your city"
              value={city}
              onChange={(event) => setCity(event.target.value)}
            />
          </div>
          <div className="signup-form__button-container">
            <button type="submit" className="signup-form__button">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;
