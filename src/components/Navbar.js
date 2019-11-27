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
  // const [user, setUser] = useState(props.user)

  const [modalShow, setModalShow] = React.useState(false);

  console.log("PROPS USER ISSSSSSS", props.user)
  if (props.user) {

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
