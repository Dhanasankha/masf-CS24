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
// import SingUpView from "./components/SingUp/SingUpView";
import Navbar from "./components/NavBar/Navbar";
import Home from "./view/Homepage 2/Home";
import WebsiteInfo from "./components/About/WebsiteInfo";
import AppDetails from "./components/AppDetails/AppDetails";
import SignUpForm from "./components/SignUp/SignUpForm";
import SignInForm from "./components/SignIn/SignInForm";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          {/* <Route index element={<SingUpContorller />} /> */}
          <Route path="home" element={<Home />} />
          <Route path="form" element={<AppDetails />} />
          {/* <Route path="signin" element={<signIn />} /> */}
          <Route path="about" element={<WebsiteInfo />} />
          <Route path="sign-up" element={<SignUpForm />} />
          <Route path="sign-in" element={<SignInForm />} />
          {/* <Route path='/' exact component={Home} /> */}
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
