import React, { useState } from "react";
import "./signin.css";

function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  }

  return (
    <div className="signin-container">
      <div className="signin-form__card">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit} className="signin-form">
          <div className="signin-form__input-container">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>

          <div className="signin-form__input-container">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>

          <div className="signin-form__button-container">
            <button type="submit" className="signin-form__button">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignInForm;
