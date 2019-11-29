import React from 'react';

export default function MessagesSideBar(props) {

  const displayConversation = (event, id) => {
    props.setConvo(event.target.innerHTML)
    console.log("event target: ", event.target)
    console.log("convo=====", props.convo)
  }

  return (
    <div id="convo-list-wrapper">
    <div id="convo-list-title">
    {props.listingObject.title}
    </div>
    {props.user.id !== props.sentBy.id ?
      <p id="convo-list-names-incoming" className="side-bar-user" onClick={(event) => displayConversation(event, event.target.id)}>
        <span>{props.sentBy.first_name}</span>
        <span>{props.user.first_name}</span>
      </p> :
      <p id="convo-list-names-outgoing" className="side-bar-user" onClick={(event) => displayConversation(event, event.target.id)}>
        {/* will need to change the thing that gets pointed to here */}
        <span>{props.sentBy.first_name}</span>
        <span>{props.toUser.first_name}</span>
      </p>
    }
    </div>
  )
}