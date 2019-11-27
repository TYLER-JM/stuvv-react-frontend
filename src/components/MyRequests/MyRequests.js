import React from 'react';
import './MyRequests.scss'
import CardList from "../CardList.js"
// import 'components/Sidebar/MyStuvv.scss'



export default function MyRequests(props) {
  
  
  return (
    <div>
      <div className="requests-banner">My Requests</div>
    <CardList cardsData={props.list} />

    </div>
  )
}