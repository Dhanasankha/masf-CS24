import "./App.css";
import Navbar from "./components/Navbar";
import DataForm from "./components/DatForm/DataForm";
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="container">
        <DataForm></DataForm>
      </div>
      <h1>Welcome to my website!</h1>
      <p>This is some sample text.</p>
    </div>
  );
}

export default App;
