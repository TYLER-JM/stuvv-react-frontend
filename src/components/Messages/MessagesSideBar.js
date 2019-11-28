import React from 'react';

export default function MessagesSideBar(props) {

  const displayConversation = (event) => {
    props.setConvo(event.target.innerHTML)
    console.log("convo=====", props.convo)
  }

  return (
    <div className="side-bar-user" onClick={(event) => displayConversation(event)}>
      {props.sentBy.first_name}
    </div>
  )
}