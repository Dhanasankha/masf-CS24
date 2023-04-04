import "./App.css";
import Navbar from "./components/Navbar";
import DataForm from "./components/DatForm/DataForm";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="techImage">
        <div className="container">
          <DataForm></DataForm>
        </div>
      </div>
    </div>
  );
}

export default App;
