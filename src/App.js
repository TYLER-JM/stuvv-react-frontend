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
  const [currentUser, setCurrentUser] = useState({});
  const [list, setList] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/profiles/me', { withCredentials: true })
      .then((resp) => {
        axios.get(`http://localhost:3000/userslistings/${resp.data.id}`, {withCredentials: true })
        .then(resp => {
          console.log("users listings: ", resp.data)
          console.log("logged in as: ", resp.data.user_id)
          // console.log("logged in as: ", resp.data.id)
          setList(resp.data)
        })

        console.log('GOT RESPONSE FROM PROFILES/ME', resp)
        setCurrentUser(resp.data)
        console.log("RESPONSE DATA:", resp.data)

        
      })
      .catch(err => {
        console.log('GOT TO THE PROFILES/ME CATCH', err)
      })
  }, []);

console.log(currentUser.id);
  return (

    <Router>
      <div>
        <Navbar user={currentUser}/>
        <Switch>
          <Route
            exact path="/"
            render={() => <Home userid={currentUser.id}/>}
          />
          <Route
            exact path="/messages"
            // component={Messages}
            render={() => < Messages userId={currentUser.id}/>}
          />
          <Route
            exact path="/my_stuvv"
            render={() => <MyStuvv className="my-stuvv-container" list={list} userid={currentUser.id}/>}

          />
          <Route
            exact path="/build"
            render={() => <BuildForm userId={currentUser.id}/>}
            // render={() => <BuildForm />}
          />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
