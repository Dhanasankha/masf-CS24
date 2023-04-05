import React from "react";
import "./OutputTable.css";

const OutputTable = ({ values, installCount, progress }) => {
  return (
    <div className="output-container">
      <h2 className="output-heading">Output:</h2>
      <table className="output-table">
        <tbody>
          <tr>
            <td>Application Name:</td>
            <td>{values.appName}</td>
          </tr>
          <tr>
            <td>Rating:</td>
            <td>{values.rating}</td>
          </tr>
          <tr>
            <td>Count:</td>
            <td>{values.count}</td>
          </tr>
          <tr>
            <td>Size:</td>
            <td>{values.size}</td>
          </tr>
          <tr>
            <td>Supported Devices:</td>
            <td>{values.supportedDevices}</td>
          </tr>
          <tr>
            <td>Languages:</td>
            <td>{values.languages}</td>
          </tr>
          <tr>
            <td>Install Count:</td>
            <td>{installCount}</td>
          </tr>
          <tr>
            <td>Progress:</td>
            <td>{progress}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OutputTable;
