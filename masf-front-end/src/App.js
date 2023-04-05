import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  BrowserRouter,
} from "react-router-dom";
// import AppbarContorller from './components/Appbar/AppbarContorller';
import React from "react";
// import Navbar from '../src/components/NavBar/Navbar';
import "./App.css";
// import Home from '../src/view/Homepage 2/Home';
// import AppDetails from './view/AppDetails';
// import PredictionPage from './view/PredictionPage';
// import BaseViewController from './view/BaseView/BaseViewController';
// import SingUpContorller from './components/SingUp/SingUpContorller';
// import LogInController from './components/LogIn/LogInController';
// import AppbarContorller from './components/Appbar/AppbarControlller';
import DataForm from "./components/DatForm/DataForm";
// import SingUpView from "./components/SingUp/SingUpView";
import Navbar from "./components/NavBar/Navbar";
import Home from "./view/Homepage 2/Home";
// import SingUpContorller from "./components/SingUp/SingUpContorller";
import SignIn from "./components/SignIn/signIn";


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <main >
        <Routes>
          <Route index element = {<DataForm/>} />
          <Route path="home" element={<Home />} />
          <Route path="form" element={<DataForm/>} />
          <Route path="signin" element={<SignIn/>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
