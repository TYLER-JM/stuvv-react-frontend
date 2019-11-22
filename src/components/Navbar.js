import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button"
import Drawer from "@material-ui/core/Drawer"
import "./Navbar.scss"

export default function Navbar() {
  // const [session, setSession] = useState(true)

  return (
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
  );
}