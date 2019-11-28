import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Link } from "react-router-dom";
import axios from "axios";
import "./index.scss";


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function SideBar(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const removeSession = () => {
    return axios.get(`http://localhost:3000/sessions`, { withCredentials: true })
      .then(resp => {
        window.location.pathname = "/"
        console.log("deleted session")
      })
      .catch(error => {
        console.log(error.response)
      })

  }

  const sideList = side => (
    <div
      className={`${classes.list} sidebar`}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <Link to="/">
          <ListItem button key="Home">
            Home
          </ListItem>
        </Link>
        <Link to="/my_stuvv">
          <ListItem button key="My_Stuvv">
            My Stuvv
          </ListItem>
        </Link>
        <Link to="/my_requests">
          <ListItem button key="My_Requests">
            My Requests
          </ListItem>
        </Link>
        <Link to="/messages">
          <ListItem button key="Messages">
            Messages
          </ListItem>
        </Link>
        <Link to="/build">
          <ListItem button key="Build">
            Build Your Listing
          </ListItem>
        </Link>
        <span onClick={() => removeSession()}>
          <ListItem
            button
            key="Logout"
          >
            Logout
          </ListItem>
        </span>

      </List>
    </div>
  );


  return (
    <div className="sidebar">
      <Button onClick={toggleDrawer('left', true)}>{props.user}</Button>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
    </div>
  );
}