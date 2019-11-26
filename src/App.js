import React, { useState, useEffect } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar'
import Register from './components/RegisterModal'
import Messages from './components/Messages/Messages'
import MyStuvv from './components/SideBar/MyStuvv'
import './App.scss';
import './components/SideBar/MyStuvv.scss'
import RegisterForm from './components/RegisterForm';
import BuildForm from './components/Build/BuildForm';
import axios from 'axios'



function App() {
  const [currentUser, setCurrentUser] = useState({
    email: "x@x.x"
  });

  useEffect(() => {
    return axios.get('http://localhost:3000/profiles/me'/* , { withCredentials: true } */)
      .then((resp) => {
        console.log('GOT RESPONSE', resp)
        // IF WE GET HERE, WE'RE ALREADY LOGGED IN
        setCurrentUser(resp.data)
      })
      .catch(err => {
        console.log('DIDNT GET RESPONSE')
        // NOT LOGGED IN
      })
  }, [currentUser]);


  return (

    <Router>
      <div>
        <Navbar user={currentUser} setUser={setCurrentUser} />
        <Switch>
          <Route
            exact path="/"
            // component={Home}
            render={() => <Home />}
          />
          <Route
            exact path="/messages"
            // component={Messages}
            render={() => < Messages/>}
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
