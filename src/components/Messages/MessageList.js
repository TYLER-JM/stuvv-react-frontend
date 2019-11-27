import React, { useState, useEffect } from 'react'
import MessageListItem from './MessageListItem';
import axios from 'axios';


export default function MessageList(props) {
  console.log("the conversation inside the ML TYPE", JSON.parse(props.conversationObject.conversation))

  const [message, setMessage] = useState([])

  const sendMessage = function () {
    // event.preventDefault();
    // useEffect(() => {
    //send the single state as the data
    axios.put(`http://localhost:3000/messages/${props.conversationObject.id}`, { message: JSON.stringify(message) }, { withCredential: true })
      .then(resp => {
        console.log("got a response after updating the conversation");
      })
      .catch(err => {
        console.log("error is: ", err);
      })
    // },[]);

  }
  const parsedConvo = JSON.parse(props.conversationObject.conversation)

  const messages = parsedConvo.map((msg, i) => {
    return (
      <MessageListItem key={i} messageObject={msg} />
    )
  })

  return (
    <li>
      <p>{props.conversationObject.id}</p>
      {messages}
      {/* <input type="text" onChange={e => setSingle([single[single], content: e.target.value ])} /> */}
      <input type="text" onChange={e => setMessage([...parsedConvo,
      {
        sender: props.userId.toString(),
        content: e.target.value,
        sent: new Date()
      }]
      )} />
      <button onClick={() => sendMessage()}>SEND!</button>
    </li>

  );
}