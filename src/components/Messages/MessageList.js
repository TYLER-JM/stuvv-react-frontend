import React, { useState, useEffect } from 'react'
import MessageListItem from './MessageListItem';
import axios from 'axios';
import classNames from 'classnames';


export default function MessageList(props) {
  console.log("the unique identifier: ", props.uniqueid)
  const [conversation, setConversation] = useState(JSON.parse(props.conversationObject.conversation));
  const [message, setMessage] = useState("");

  const reset = (e) => {
    setMessage("")
    e.target.previousSibling.focus()
  }

  const sendMessage = function (e) {
    setConversation((prev) => [...prev, {
      sender: props.user.first_name,
      content: message,
      send: new Date()
    }])
    reset(e)
  }

  useEffect(() => {
    axios.put(`http://localhost:3000/messages/${props.conversationObject.id}`, { message: JSON.stringify(conversation) }, { withCredential: true })
    .then(resp => {
      console.log("got a response after updating the conversation");
      })
      .catch(err => {
        console.log("error is: ", err);
      })
  }, [conversation])


    const bubbles = conversation.map((msg, i) => {
    return (
      <MessageListItem key={i} messageObject={msg} user={props.user} />
    )
  })

  return (
    <li className={classNames({ "hidden": props.uniqueid !== props.convo })}>
      <span>{props.conversationObject.listing.title}</span>
      {bubbles}

      <input id="emptyMe" type="text" value={message} onChange={e => setMessage(e.target.value)} />
      <button onClick={(e) => sendMessage(e)}>SEND!</button>
    </li>
  );
}