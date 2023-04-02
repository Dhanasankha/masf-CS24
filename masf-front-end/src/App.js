import React from 'react';
import Navbar from '../src/components/NavBar/Navbar';
import './App.css';
import Home from '../src/view/Homepage 2/Home';
import SignUp from '../src/view/SignUpPage/SignUp'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/sign-up' exact component={SignUp} />
          
        </Switch>
      </Router>
    </>
  );
}

export default App;
