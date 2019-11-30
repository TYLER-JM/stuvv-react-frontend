import React, { useState, useEffect } from 'react'
import MessageListItem from './MessageListItem';
import axios from 'axios';
import classNames from 'classnames';
import Button from 'react-bootstrap/Button'
import './Messages.scss'


export default function MessageList(props) {

  console.log("the unique identifier: ", props.uniqueid)

  const [conversation, setConversation] = useState(JSON.parse(props.conversationObject.conversation));
  const [message, setMessage] = useState("");
  // const [accept, setAccept] = useState((<div className="buttons-message">
  //   <Button variant="outline-success" onClick={handleAccept}>Accept</Button>
  //   <Button variant="outline-secondary">Decline</Button>
  // </div>));

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

  const handleAccept = function () {
    return axios.patch(`http://localhost:3000/requests/${props.conversationObject.request.id}`, { request: { approved: true } }, { withCredentials: true })
      .then(resp => {
        console.log("GOT OUTBOUND MESSAGES: ", resp.data);
        // setAccept(resp.data)
      })
      .catch(error => console.log(error))
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
      {bubbles}
      {!props.conversationObject.request.approved ? (<div className="buttons-message">
        <Button variant="outline-success" onClick={handleAccept}>Accept</Button>
        <Button variant="outline-secondary">Decline</Button>
      </div>) : null}

      <div className="search-input">
        <input className="input-field" type="text" value={message} onChange={e => setMessage(e.target.value)} />
        <button className="send" onClick={(e) => sendMessage(e)}>SEND!</button>
      </div>
    </li>
  );
}