import { BrowserRouter as Router, Route, Routes , Link, BrowserRouter} from "react-router-dom";
// import AppbarContorller from './components/Appbar/AppbarContorller';
import React from 'react';
// import Navbar from '../src/components/NavBar/Navbar';
import './App.css';
// import Home from '../src/view/Homepage 2/Home';
// import AppDetails from './view/AppDetails';
// import PredictionPage from './view/PredictionPage';
// import BaseViewController from './view/BaseView/BaseViewController';
// import SingUpContorller from './components/SingUp/SingUpContorller';
import LogInController from './components/LogIn/LogInController';
// import AppbarContorller from './components/Appbar/AppbarControlller';
import DataForm from "./components/DatForm/DataForm";
import Navbar from "./components/Navbar";


function App() {
  return ( 
    <BrowserRouter>
      <Navbar/>
      <main >
        <Routes>
          <Route index element = {<DataForm/>} />
          <Route path="home" element = {<LogInController/>} />
          {/* <Route path='/' exact component={Home} /> */}
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
