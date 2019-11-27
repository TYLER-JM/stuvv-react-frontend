import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import SideBar from './SideBar';
import "./nav.scss";
import Register from './RegisterModal';

export default function Navbar(props) {
  // const [user, setUser] = useState(props.user)

  // const [currentUser, setCurrentUser] = useState();
  const [modalShow, setModalShow] = React.useState(false);


  // useEffect(() => {
  //   axios.get('http://localhost:3000/profiles/me', { withCredentials: true })
  //     .then((resp) => {
  //       setCurrentUser(resp.data)
  //     })
  //     .catch(err => console.log("error:", err));
  // }, [])


  console.log("PROPS USER ISSSSSSS", props.user)
  //props.user === currentUser
  // console.log("PROPS USER ISSSSSSS", currentUser)
  if (props.user.id) {

    return (
      <nav>
        <div>
          < SideBar user={props.user.first_name} />
        </div>
        <i className="fab fa-stumbleupon-circle"></i>
      </nav>)

  } else {

    return (
      <nav>
        <div>
          <div onClick={() => setModalShow(true)}>SignIn</div>
          <div onClick={() => setModalShow(true)}>Register</div>
        </div>


        <Register show={modalShow} onHide={() => setModalShow(false)} />
        <i className="fab fa-stumbleupon-circle"></i>
      </nav>
    )
  }

}
