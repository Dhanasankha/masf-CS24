import React, { useState } from "react";
import "./DataForm.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import OutputTable from "./OutputTable";

const DataForm = () => {
  const [appName, setAppName] = useState("");
  const [rating, setRating] = useState("");
  const [count, setCount] = useState("");
  const [size, setSize] = useState("");
  const [supportedDevices, setSupportedDevices] = useState("");
  const [languages, setLanguages] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [formValues, setFormValues] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const initialValues = {
      appName,
      rating,
      count,
      size,
      supportedDevices,
      languages,
    };
    axios
      .post("http://127.0.0.1:8000/home/appdetails", initialValues)
      .then((response) => {
        setFormValues(initialValues);
        setSubmitted(true);
      })
      .catch(console.error());
  };

  return (
    <div className="data-form-container">
      <div
        className="data-form"
        style={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
        }}
      >
        <p className="Header">Enter your data</p>
        <form onSubmit={handleSubmit} className="grid-container" method="POST">
          <div className="form-group grid-item" style={{ marginTop: "20px" }}>
            <TextField
              id="appName"
              name="AppName"
              label="Application Name"
              onChange={(e) => setAppName(e.target.value)}
              variant="outlined"
              className="form-field"
              required
            />
          </div>

          <div className="form-group grid-item" style={{ marginTop: "20px" }}>
            <TextField
              name="rating"
              onChange={(e) => setRating(e.target.value)}
              id="rating"
              label="Rating"
              variant="outlined"
              className="form-field"
              required
            />
          </div>
          <div className="form-group grid-item" style={{ marginTop: "20px" }}>
            <TextField
              name="count"
              id="count"
              onChange={(e) => setCount(e.target.value)}
              label="Count"
              variant="outlined"
              className="form-field"
              required
            />{" "}
          </div>
          <div className="form-group grid-item" style={{ marginTop: "20px" }}>
            <TextField
              name="size"
              id="size"
              onChange={(e) => setSize(e.target.value)}
              label="Size"
              variant="outlined"
              className="form-field"
              required
            />
          </div>

          <div className="form-group grid-item" style={{ marginTop: "20px" }}>
            <TextField
              name="supportedDevices"
              id="supportedDevices"
              onChange={(e) => setSupportedDevices(e.target.value)}
              label="Supported Devices"
              variant="outlined"
              className="form-field"
              required
            />
          </div>

          <div className="form-group grid-item" style={{ marginTop: "20px" }}>
            <TextField
              name="languages"
              id="languages"
              onChange={(e) => setLanguages(e.target.value)}
              label="Languages"
              variant="outlined"
              className="form-field"
              required
            />
          </div>

          <div className="form-group grid-item" style={{ marginTop: "20px" }}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </div>
        </form>

        {submitted && <OutputTable formValues={formValues} />}
      </div>
    </div>
  );
};

export default DataForm;
