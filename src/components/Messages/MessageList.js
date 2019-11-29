import React, { useState, useEffect } from 'react'
import MessageListItem from './MessageListItem';
import axios from 'axios';
import classNames from 'classnames';
import './Messages.scss'


export default function MessageList(props) {

  // const [conversation, setConversation] = useState([]);
  const [conversation, setConversation] = useState(JSON.parse(props.conversationObject.conversation));
  // const [message, setMessage] = useState({});
  const [message, setMessage] = useState("");
  // const [refresh, setRefresh] = useState([]);

  const reset = (e) => {
    setMessage("")
    e.target.previousSibling.focus()
  }

  const sendMessage = function (e) {
    //send the single state as the data
    // setRefresh(message[message.length - 1])

    // setConversation((prev) => [...prev, message])
    setConversation((prev) => [...prev, {
      sender: props.user.first_name,
      content: message,
      send: new Date()
    }])
    console.log("CONVO:", conversation)
    reset(e)

    // axios.put(`http://localhost:3000/messages/${props.conversationObject.id}`, { message: JSON.stringify(message) }, { withCredential: true })
  }
  // const parsedConvo = JSON.parse(props.conversationObject.conversation)

  useEffect(() => {

    axios.put(`http://localhost:3000/messages/${props.conversationObject.id}`, { message: JSON.stringify(conversation) }, { withCredential: true })
    .then(resp => {
      console.log("got a response after updating the conversation");
      })
      .catch(err => {
        console.log("error is: ", err);
      })

  }, [conversation])



  // const bubbles = parsedConvo.map((msg, i) => {
    const bubbles = conversation.map((msg, i) => {
    return (
      <MessageListItem key={i} messageObject={msg} user={props.user} />
    )
  })

  return (
    <li className={classNames({ "hidden": props.sentBy.first_name !== props.convo })}>
      <span>{props.conversationObject.listing.title}</span>
      {/* <p>{props.conversationObject.id}</p> */}
      {bubbles}
      {/* in case we want live messages
      <div className="message-list-item">
        <span>{refresh.sender} says: </span>
        <span>{refresh.content}</span>
      </div> */}

      {/* <input type="text" onChange={e => setMessage([...parsedConvo,
      {
        sender: props.user.first_name, //current logged in user
        content: e.target.value,
        sent: new Date()
      }]
      )} /> */}

      {/* <input id="emptyMe" type="text" onChange={e => setMessage({
        sender: props.user.first_name,
        content: e.target.value,
        send: new Date()
      })} /> */}
      <div className="search-input">
        <input className="input-field" id="emptyMe" type="text" value={message} onChange={e => setMessage(e.target.value)} />
        <button className="button" onClick={(e) => sendMessage(e)}>SEND</button>
      </div>
    </li>

  );
}