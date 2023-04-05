import React, { useState } from "react";
import axios from "axios";
import "./AppDetails.css";

const AppDetails = () => {
  const [catergory, setCatergory] = useState("");
  const [prize, setPrize] = useState("");
  const [size, setSize] = useState("");
  const [outcome, setOutcome] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const appDetails = {
      catergory: catergory,
      prize: prize,
      size: size,
    };

    console.log(appDetails);

    console.log(appDetails);

    axios
      .post("http://127.0.0.1:8000/test/appdetails", appDetails, {
        headers: {
          "Content-Type": "application/json",
        },
      })

      .then((response) => {
        console.log(response.data.prediction);
        setOutcome(response.data.prediction);
      })
      .catch(console.error());
  };

  const handleDropdownChange = (event) => {
    setCatergory(event.target.value);
  };

  return (
    <div className="app-details-container">
      <div className="app-details-card">
        <h1>Make Prediction</h1>
        <form onSubmit={handleSubmit} method="POST">
          <label>
            Category:
            <select
              id="select-value"
              value={catergory}
              onChange={handleDropdownChange}
            >
              <option value="BEAUTY">BEAUTY</option>
              <option value="WEATHER">WEATHER</option>
              <option value="BUISNESS">BUISNESS</option>
            </select>
          </label>
          <br />
          <label>
            Prize:
            <input
              className="app-details-field"
              type="number"
              value={prize}
              onChange={(e) => setPrize(e.target.value)}
            />
          </label>
          <br />
          <label>
            Size:
            <input
              className="app-details-field"
              type="number"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Make Prediction!</button>
          <p>{outcome}</p>
        </form>
      </div>
    </div>
  );
};

export default AppDetails;
