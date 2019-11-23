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
        <div>
          < SideBar />
        </div>
        <div>
          <Link to="/register">SignIn</Link>

          <Link to="/register">Register</Link>
        </div>
      </div>
  );
}
            
              