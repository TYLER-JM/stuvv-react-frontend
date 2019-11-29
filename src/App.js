import React, { useState, useEffect } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Messages from './components/Messages/Messages'
import MyStuvv from './components/SideBar/MyStuvv'
import './App.scss';
import './components/SideBar/MyStuvv.scss'
import BuildForm from './components/Build/BuildForm';
import axios from 'axios'
import MyRequests from './components/MyRequests/MyRequests'

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [list, setList] = useState([]);
  const [request, setRequest] = useState([]);
  const [buildState, setBuildState] = useState({});
  // const [buildState, setBuildState] = useState({description: null, price: null, title: null, id: null});

  useEffect(() => {

    axios.get('http://localhost:3000/profiles/me', { withCredentials: true })
      .then((resp) => {
        setCurrentUser(resp.data)
        console.log("RESPONSE DATA:", resp.data)


        axios.get(`http://localhost:3000/userslistings/${resp.data.id}`, { withCredentials: true })
          .then((resp) => {
            console.log("users listings: ", resp.data)
            console.log("logged in as: ", resp.data.user_id)
            setList(resp.data)
          })

        axios.get(`http://localhost:3000/usersrequests/${resp.data.id}`, { withCredentials: true })
          .then((resp) => {
            console.log('Fetching users requests', resp.data)
            setRequest(resp.data)
          })
          .catch(err => {
            console.log('SORRY!', err)
          })
      })
      .catch(err => {
        console.log('GOT TO THE PROFILES/ME CATCH', err)
      })
  }, []);

  // console.log("from the App.js file", currentUser.id);
  if (!currentUser && !list && !request) { return (<h1>Loading...</h1>); } else {
    return (

      <Router>
        <div>
          <Navbar user={currentUser} />
          <Switch>
            <Route
              exact path="/"
              render={() => <Home user={currentUser} />}
            />
            <Route
              exact path="/messages"
              // component={Messages}
              render={() => < Messages user={currentUser} />}
            />
            <Route
              exact path="/my_stuvv"
              render={() => <MyStuvv className="my-stuvv-container" list={list} user={currentUser} setBuildState={setBuildState} />}

            />
            <Route
              exact path="/build"
              render={() => <BuildForm user={currentUser} buildState={buildState} />}
            // render={() => <BuildForm />}
            />
            <Route
              exact path="/my_requests"
              render={() => <MyRequests className="my-stuvv-container" request={request} user={currentUser} />}
            />
          </Switch>
          <Footer />
        </div>
      </Router>
    );

  }
}

export default App;
