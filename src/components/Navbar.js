import React from 'react';
import SideBar from './SideBar';
import "./nav.scss";
import Register from './Login/RegisterModal';

export default function Navbar(props) {
  const [modalShow, setModalShow] = React.useState(false);

  if (props.user.id) {

    return (
      <nav>
        <div>
          < SideBar user={props.user.first_name} />
        </div>
        <i className="fab fa-stumbleupon-circle" onClick={() => window.location.href = "/"}></i>
      </nav>)

  } else {

    return (
      <nav>
        <div>
          <div onClick={() => setModalShow(true)}>SignIn</div>
          <div onClick={() => setModalShow(true)}>Register</div>
        </div>

        <Register show={modalShow} onHide={() => setModalShow(false)} />
        <i className="fab fa-stumbleupon-circle" onClick={() => window.location.href = "/"}></i>
      </nav>
    )
  }

}
