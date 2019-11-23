import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar'
import Register from './components/Register'
import Messages from './components/SideBar/Messages'
import MyStuvv from './components/SideBar/MyStuvv'
import './App.scss';
import './components/SideBar/MyStuvv.scss'




function App() {
  return (
    
    <Router>
      <div>
        <Navbar />
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
          <Route 
            exact path="/messages"
            component={Messages}
          />
          <Route
            exact path="/my_stuvv"
            // component={MyStuvv}
            render={() => <MyStuvv className="my-stuvv-container" />}

          />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
