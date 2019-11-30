import React from 'react';

export default function MessagesSideBar(props) {

  const displayConversation = (event) => {
    props.setConvo(event.currentTarget.id)
  }

  return (
    <div id={props.uniqueid} onClick={(event) => displayConversation(event)}>
      <div >
        About: {props.listingObject.title}
      </div>


      {props.user.id !== props.sentBy.id ?
        <p id="convo-list-names-incoming" className="side-bar-user">
          <span>From: {props.sentBy.first_name}</span>
          {/* <span>{props.user.first_name}</span> */}
        </p> :
        <p id="convo-list-names-outgoing" className="side-bar-user">
          {/* <span>{props.sentBy.first_name}</span> */}
          <span>To: {props.toUser.first_name}</span>
        </p>
      }
    </div>
  )
}