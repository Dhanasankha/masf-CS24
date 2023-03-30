import React from 'react';
import Navbar from '../src/components/NavBar/Navbar';
import './App.css';
import Home from '../src/view/Homepage 2/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
