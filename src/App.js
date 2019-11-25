import React, { useState, useEffect } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar'
import Register from './components/RegisterModal'
import Messages from './components/SideBar/Messages'
import MyStuvv from './components/SideBar/MyStuvv'
import './App.scss';
import './components/SideBar/MyStuvv.scss'
import RegisterForm from './components/RegisterForm';
import BuildForm from './components/Build/BuildForm';
import axios from 'axios'



function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/profiles/me', { withCredentials: true })
      .then((resp) => {
        console.log('GOT RESPONSE', resp)
        // IF WE GET HERE, WE'RE ALREADY LOGGED IN
        setCurrentUser(resp.data)
      })
      .catch(err => {
        // NOT LOGGED IN
      })
  }, []);

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
            render={() => <RegisterForm />}
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
          <Route
            exact path="/build"
            render={() => <BuildForm />}
          />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
