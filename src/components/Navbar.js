import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Navbar() {
  return (
    // <Router>
      <div>
        <nav>
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
    // </Router>
  );
}