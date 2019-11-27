import React, { useState, useEffect } from 'react'
import MessageListItem from './MessageListItem';
import axios from 'axios';


export default function MessageList(props) {
  console.log("the conversation inside the ML TYPE", JSON.parse(props.conversationObject.conversation))

  const [single, setSingle] = useState({
    sender: props.userId,
    content: "",
    sent: new Date()
  })

  const sendMessage = function() {
    // event.preventDefault();
    // useEffect(() => {
      //send the single state as the data
      axios.put(`http://localhost:3000/messages/${props.conversationObject.id}`, single, { withCredential: true })
        .then(resp => {
          console.log("got a response after updating the conversation");
        })
        .catch(err => {
          console.log("error is: ", err);
        })
    // },[]);

  }

  const messages = JSON.parse(props.conversationObject.conversation).map((message, i) => {
    return (
      <MessageListItem key={i} messageObject={message}/>
    )
  })

  return (
      <li>
        <p>{props.conversationObject.id}</p>
      {messages}
      <input type="text" onChange={e => setSingle({...single, content: e.target.value})}/>
      <button onClick={() => sendMessage()}>SEND!</button>
      </li>

  );
}