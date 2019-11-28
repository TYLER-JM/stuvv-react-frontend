import React from 'react';

export default function MessagesSideBar(props) {
  
  const displayConversation = (event) => {
    props.setConvo(Number(event.target.innerHTML))
    console.log("convo=====", props.convo)
  }
  
  return (
    <div onClick={(event) => displayConversation(event)}>
      {props.sentBy}
    </div>
  )
}