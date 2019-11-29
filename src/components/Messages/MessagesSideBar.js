import React from 'react';

export default function MessagesSideBar(props) {

  const displayConversation = (event) => {
    props.setConvo(event.target.innerHTML)
    console.log("convo=====", props.convo)
  }

  return (
    <>
    <div>
    {props.listingObject.title}
    </div>
    {props.user.id !== props.sentBy.id ?
      <div className="side-bar-user" onClick={(event) => displayConversation(event)}>
        <span>{props.sentBy.first_name}</span>
        <span>{props.user.first_name}</span>
      </div> :
      <div className="side-bar-user" onClick={(event) => displayConversation(event)}>
      <span>{props.sentBy.first_name}</span>
      <span>{props.toUser.first_name}</span>
    </div>
    }
    </>
  )
}