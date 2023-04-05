import React, { useState } from "react";
import "./DataForm.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { MenuItem } from "@mui/material";
import axios from "axios";

const DataForm = () => {
  const [price, setPrice] = useState();
  const [size, setSize] = useState();
  const [category, setCategory] = useState();
  // const [languages, setLanguages] = useState("");
  const [outcome, setOutcome] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const appDetails = {
      category: category,
      price: price,
      size: size,
    };
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

  return (
    <div className="page">
      <div
        className="data-form-container"
        style={{ display: "inline-block", marginRight: "20px" }}
      >
        <div
          className="data-form"
          style={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
          }}
        >
          <p className="Header">Enter your data</p>
          <form
            onSubmit={handleSubmit}
            className="grid-container"
            method="POST"
          >
            <div className="form-group grid-item" style={{ marginTop: "20px" }}>
              <TextField
                id={price}
                name={price}
                label="Application Name"
                onChange={(e) => setPrice(e.target.value)}
                variant="outlined"
                className="form-field"
                required
              />
            </div>

            <div className="form-group grid-item" style={{ marginTop: "20px" }}>
              <TextField
                name={size}
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
                name={category}
                id={category}
                select
                label="App Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                variant="outlined"
                className="form-field"
                required
              >
                <MenuItem value="category1">Social Networking</MenuItem>
                <MenuItem value="category2">Photo & Video</MenuItem>
                <MenuItem value="category3">Games</MenuItem>
                <MenuItem value="category4">Music</MenuItem>
                <MenuItem value="category5">Reference</MenuItem>
                <MenuItem value="category6">Health & Fitness</MenuItem>
                <MenuItem value="category7">Weather</MenuItem>
                <MenuItem value="category8">Utilities</MenuItem>
                <MenuItem value="category9">Travel</MenuItem>
                <MenuItem value="category10">Shopping</MenuItem>
                <MenuItem value="category11">News</MenuItem>
                <MenuItem value="category12">Navigation</MenuItem>
                <MenuItem value="category13">Lifestyle</MenuItem>
                <MenuItem value="category14">Entertainment</MenuItem>
                <MenuItem value="category15">Food & Drink</MenuItem>
                <MenuItem value="category16">Sports</MenuItem>
                <MenuItem value="category17">Book</MenuItem>
                <MenuItem value="category18">Finance</MenuItem>
                <MenuItem value="category19">Education</MenuItem>
                <MenuItem value="category20">Productivity</MenuItem>
                <MenuItem value="category21">Business</MenuItem>
                <MenuItem value="category22">Catalogs</MenuItem>
                <MenuItem value="category23">Medical</MenuItem>
              </TextField>
            </div>
            <div className="form-group grid-item" style={{ marginTop: "20px" }}>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </div>
            <p>{outcome}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DataForm;
