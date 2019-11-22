import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SideBar from './SideBar';

export default function Navbar() {
  // const [session, setSession] = useState(true)

  return (
      <div>
        <nav className="nav">
              < SideBar />
          <ul className="nav-bar">
            
            <li>
              <Link to="/register">SignIn</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>
      </div>
  );
}