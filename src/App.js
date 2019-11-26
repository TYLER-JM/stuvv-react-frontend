import React, { useState, useEffect } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar'
import Messages from './components/Messages/Messages'
// import Messages from './components/SideBar/Messages'
import MyStuvv from './components/SideBar/MyStuvv'
import './App.scss';
import './components/SideBar/MyStuvv.scss'
import BuildForm from './components/Build/BuildForm';
import axios from 'axios'

function App() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    axios.get('http://localhost:3000/profiles/me', { withCredentials: true })
      .then((resp) => {
        console.log('GOT RESPONSE', resp)
        setCurrentUser(resp.data)
      })
      .catch(err => {
        console.log('DIDNT GET RESPONSE')
      })
  }, []);


  return (

    <Router>
      <div>
        <Navbar user={currentUser} />
        <Switch>
          <Route
            exact path="/"
            render={() => <Home />}
          />
          <Route
            exact path="/messages"
            // component={Messages}
            render={() => < Messages/>}
          />
          <Route
            exact path="/my_stuvv"
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
