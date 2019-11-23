import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SideBar from './SideBar';
import Register from './RegisterModal';

export default function Navbar() {
  // const [session, setSession] = useState(true)

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <nav>
      <div>
        < SideBar />
      </div>
      <Register show={modalShow} onHide={() => setModalShow(false)} />
      {/* <div>
        <Link to="/register">SignIn</Link>
        <Link to="/register">Register</Link>
      </div> */}
      <ul>
        <li onClick={() => setModalShow(true)}>SignIn</li>
        <li onClick={() => setModalShow(true)}>Register</li>

      </ul>

      <i class="fab fa-stumbleupon-circle"></i>
    </nav>
  );
}

