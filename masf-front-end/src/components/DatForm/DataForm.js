import React, { useState } from "react";
import "./DataForm.css";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

const DataForm = () => {
  const [appName, setAppName] = useState("");
  const [appCategory, setAppCategory] = useState("");
  const [targetAge, setTargetAge] = useState("");
  const [targetGender, setTargetGender] = useState("");
  const [targetLocation, setTargetLocation] = useState("");
  const [monetizationStrategy, setMonetizationStrategy] = useState("");
  const [appFeatures, setAppFeatures] = useState("");
  const [userAcquisitionStrategy, setUserAcquisitionStrategy] = useState("");
  const [budget, setBudget] = useState("");
  const [competitorAnalysis, setCompetitorAnalysis] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="box">
      <div className="data-form">
        <h2>Enter your data</h2>
        <form onSubmit={handleSubmit} className="grid-container">
          <div className="form-group grid-item">
            <TextField
              id="appName"
              label="Application Name"
              value={appName}
              onChange={(e) => setAppName(e.target.value)}
              variant="outlined"
            />
          </div>
          <div className="form-group grid-item">
            <TextField
              id="appCategory"
              select
              label="Application Category"
              value={appCategory}
              onChange={(e) => setAppCategory(e.target.value)}
              SelectProps={{
                native: true,
              }}
              variant="outlined"
            >
              <MenuItem value="">--Select Category--</MenuItem>
              <MenuItem value="Action">Action</MenuItem>
              <MenuItem value="Adventure">Adventure</MenuItem>
              <MenuItem value="Arcade">Arcade</MenuItem>
              <MenuItem value="Casual">Casual</MenuItem>
              <MenuItem value="Educational">Educational</MenuItem>
              <MenuItem value="Puzzle">Puzzle</MenuItem>
              <MenuItem value="Simulation">Simulation</MenuItem>
              <MenuItem value="Sports">Sports</MenuItem>
              <MenuItem value="Strategy">Strategy</MenuItem>
            </TextField>
          </div>
          <div className="form-group grid-item">
            <TextField
              id="targetAge"
              label="Target Age"
              value={targetAge}
              onChange={(e) => setTargetAge(e.target.value)}
              variant="outlined"
            />
          </div>
          <div className="form-group grid-item">
            <TextField
              id="targetGender"
              label="Target Gender"
              value={targetGender}
              onChange={(e) => setTargetGender(e.target.value)}
              variant="outlined"
            />
          </div>
          <div className="form-group grid-item">
            <TextField
              id="targetLocation"
              label="Target Location"
              value={targetLocation}
              onChange={(e) => setTargetLocation(e.target.value)}
              variant="outlined"
            />
          </div>
          <div className="form-group grid-item">
            <TextField
              id="monetizationStrategy"
              select
              label="Monetization Strategy"
              value={monetizationStrategy}
              onChange={(e) => setMonetizationStrategy(e.target.value)}
              SelectProps={{
                native: true,
              }}
              variant="outlined"
            >
              <MenuItem value="">--Select Strategy--</MenuItem>
              <MenuItem value="In-App Purchases">In-App Purchases</MenuItem>
              <MenuItem value="Ads">Ads</MenuItem>
              <MenuItem value="Subscriptions">Subscriptions</MenuItem>
              <MenuItem value="Freemium">Freemium</MenuItem>
              <MenuItem value="Paymium">Paymium</MenuItem>
            </TextField>
          </div>
          <div className="form-group grid-item">
            <TextField
              id="appFeatures"
              label="Application Features"
              value={appFeatures}
              onChange={(e) => setAppFeatures(e.target.value)}
              multiline
              rows={4}
              variant="outlined"
            />
          </div>
          <div className="form-group grid-item">
            <TextField
              id="userAcquisitionStrategy"
              label="User Acquisition Strategy"
              value={userAcquisitionStrategy}
              onChange={(e) => setUserAcquisitionStrategy(e.target.value)}
              multiline
              rows={4}
              variant="outlined"
            />
          </div>
          <div className="form-group grid-item">
            <TextField
              id="budget"
              label="Budget"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              variant="outlined"
            />
          </div>
          <div className="form-group grid-item">
            <TextField
              id="competitorAnalysis"
              label="Competitor Analysis"
              value={competitorAnalysis}
              onChange={(e) => setCompetitorAnalysis(e.target.value)}
              multiline
              rows={4}
              variant="outlined"
            />
          </div>
          <div className="form-group grid-item">
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DataForm;
