import "./App.css";
import Navbar from "./components/Navbar";
// import signIn from "./components/SignIn/signIn";
import DataForm from "./components/DatForm/DataForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar></Navbar>

      <div>
        {/* <img src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" /> */}
      </div>
      <div className="techImage">
        {/* <signIn></signIn> */}
        <div className="container">
          <DataForm></DataForm>
        </div>
      </div>
    </div>
  );
}

export default App;
