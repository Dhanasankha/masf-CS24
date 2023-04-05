// import React, { useState } from "react";
// import "./signIn.css";

// function signIn() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Perform authentication here using the email and password
//     // provided by the user
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="email">Email:</label>
//       <input
//         type="email"
//         id="email"
//         name="email"
//         value={email}
//         onChange={handleEmailChange}
//         required
//       />

//       <label htmlFor="password">Password:</label>
//       <input
//         type="password"
//         id="password"
//         name="password"
//         value={password}
//         onChange={handlePasswordChange}
//         required
//       />

//       <button type="submit">Sign In</button>
//     </form>
//   );
// }

// export default signIn;
