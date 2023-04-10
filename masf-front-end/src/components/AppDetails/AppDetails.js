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
      .post("https://web-production-6de9.up.railway.app/", appDetails, {
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
              <option value="ART_AND_DESIGN">Art & Design</option>
              <option value="AUTO_AND_VEHICLES">Auto & Vehicles</option>
              <option value="BEAUTY">BEAUTY</option>
              <option value="BOOKS_AND_REFERENCE">Books & Reference</option>
              <option value="BUSINESS">Business</option>
              <option value="COMICS">Comics</option>
              <option value="COMMUNICATION">Communication</option>
              <option value="DATING">Dating</option>
              <option value="EDUCATION">Education</option>
              <option value="ENTERTAINMENT">Entertainment</option>
              <option value="EVENTS">Events</option>
              <option value="FINANCE">Finance</option>
              <option value="FOOD_AND_DRINK">Food & Drink</option>
              <option value="HEALTH_AND_FITNESS">Health & Fitness</option>
              <option value="HOUSE_AND_HOME">Home</option>
              <option value="LIBRARIES_AND_DEMO">Library</option>
              <option value="LIFESTYLE">LifeStyle</option>
              <option value="FAMILY">Family</option>
              <option value="MEDICAL">Medical</option>
              <option value="SOCIAL">Social</option>
              <option value="SHOPPING">Shopping</option>
              <option value="PHOTOGRAPHY">Photography</option>
              <option value="SPORTS">Sports</option>
              <option value="TRAVEL_AND_LOCAL">Tourism</option>
              <option value="TOOLS">Tools</option>
              <option value="PERSONALIZATION">Personalization</option>
              <option value="PRODUCTIVITY">Productivity</option>
              <option value="PARENTING">Parenting</option>
              <option value="WEATHER">Weather</option>
              <option value="VIDEO_PLAYERS">Video Players</option>
              <option value="NEWS_AND_MAGAZINES">News</option>
              <option value="MAPS_AND_NAVIGATION">Navigation</option>
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
