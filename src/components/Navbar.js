import React from 'react';
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
  // const [session, setSession] = useState(true)

  const [modalShow, setModalShow] = React.useState(false);

  console.log("PROPS USER ISSSSSSS", props.user)
  if (props.user) {

    return (
      <nav>
        <div>
          < SideBar />
          <ul>
            <li onClick={() => setModalShow(true)}>{props.user.email}</li>
          </ul>
        </div>
        <i className="fab fa-stumbleupon-circle"></i>
      </nav>)

  } else {

    return (
      <nav>
        <ul>
          <li onClick={() => setModalShow(true)}>SignIn</li>
          <li onClick={() => setModalShow(true)}>Register</li>
        </ul>
        <Register show={modalShow} onHide={() => setModalShow(false)} />
        <i className="fab fa-stumbleupon-circle"></i>
      </nav>
    )
  }

}