import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar'
import Register from './components/Register'
import './App.css';

function App() {
  return (
    
    <Router>
      <div>
        <Navbar />
        <h1>HEY</h1>
        <Switch>
          <Route
            exact path="/"
            // component={Home}
            render={() => <Home />}
          />
          <Route
            exact path="/register"
            // component={Home}
            component={Register}
          />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
