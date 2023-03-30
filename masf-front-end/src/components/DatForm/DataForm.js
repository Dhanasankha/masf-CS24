import React from "react";
// import "./DataForm.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import axios from "axios";
import { alignProperty } from "@mui/material/styles/cssUtils";

const DataForm = () => {
  const [appName, setAppName] = useState("");
  const [rating, setRating] = useState("");
  const [count, setCount] = useState("");
  const [size, setSize] = useState("");
  const [supportedDevices, setSupportedDevices] = useState("");
  const [languages, setLanguages] = useState("");

  const submitHandle = async () => {
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
        console.log(response);
      })
      .catch(console.error());
  };
  return (
    <div
      className="box"
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <div
        className="data-form"
        style={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
        }}
      >
        <h2>Enter your data</h2>
        <form onSubmit={submitHandle} className="grid-container" method="POST">
          <div className="form-group grid-item">
            <TextField
              id="appName"
              name="AppName"
              label="Application Name"
              onChange={(e) => setAppName(e.target.value)}
              variant="outlined"
              className="form-field"
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
            />
          </div>
          <div className="form-group grid-item" style={{ marginTop: "20px" }}>
            <TextField
              name="size"
              onChange={(e) => setSize(e.target.value)}
              id="Size"
              label="Size"
              variant="outlined"
              className="form-field"
            />
          </div>
          <div className="form-group grid-item" style={{ marginTop: "20px" }}>
            <TextField
              name="supportedDevices"
              id="supportedDevices"
              onChange={(e) => setSupportedDevices(e.target.value)}
              label="supportedDevices"
              variant="outlined"
              className="form-field"
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
            />
          </div>

          <div
            className="form-group grid-item"
            style={{ marginTop: "20px", alignItems: "center", display: "flex" }}
          >
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DataForm;
