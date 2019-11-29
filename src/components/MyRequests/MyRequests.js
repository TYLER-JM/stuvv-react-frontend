import React from 'react';
import './Myrequests.scss'
import CardList from "../CardList.js"
import Register from '../Login/RegisterModal';



export default function MyRequests(props) {
  if (props.user.id) {
    return (
      <div className="requests">
        <div className="requests-banner">My Requests</div>
        <CardList cardsData={props.request} user={props.user} />
      </div>
    )
  } else {
    return (<Register show="true" onHide={() => window.location.pathname = "/"} />)

  }
}