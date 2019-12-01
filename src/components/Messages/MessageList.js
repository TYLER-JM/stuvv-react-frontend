import React, { useState, useEffect, Fragment } from 'react'
import MessageListItem from './MessageListItem';
import axios from 'axios';
import classNames from 'classnames';
import Button from 'react-bootstrap/Button'
import './Messages.scss'


export default function MessageList(props) {

  console.log("the unique identifier: ", props.uniqueid)

  const [conversation, setConversation] = useState(JSON.parse(props.conversationObject.conversation));
  const [message, setMessage] = useState("");
  // const [confirmation, setConfirmation] = useState("this is validate state");

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

  const handleAccept = function (status) {
    // console.log(confirmation)
    // console.log(setConfirmation("does setValidade works?"))
    // console.log(confirmation)
    return axios.put(`http://localhost:3000/requests/${props.conversationObject.request.id}`, { request: status }, { withCredentials: true })
      .then(resp => {
        console.log("Patch was done and this is now approved: ", resp.data);

        setTimeout(() => {
          setAcceptButtons(null)
        }, 1000)
      })
      .catch(error => console.log(error))
  }
  const [acceptButtons, setAcceptButtons] = useState((
    <Fragment>
      {/* {confirmation} */}
      <div className="buttons-message">
        <Button
          variant="outline-success"
          onClick={() => {
            // setConfirmation("This request has been validated");
            handleAccept(1);
          }}
        >
          Accept
        </Button>
        <Button variant="outline-secondary" onClick={() => handleAccept(-1)}>Decline</Button>
      </div>
    </Fragment>
  ));

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

  const startDate = new Date(props.conversationObject.request.start_date).toUTCString()
  const endDate = new Date(props.conversationObject.request.end_date).toUTCString()

  return (
    <li className={classNames({ "hidden": props.uniqueid !== props.convo })}>

      interested in book for {startDate.slice(0, 16)} until {endDate.slice(0, 16)}

      {bubbles}

      {props.tabSelected === "My stuvv" ? props.conversationObject.request.approved === 0 ? acceptButtons : null : null}

      <div className="search-input">
        <input className="input-field" type="text" value={message} onChange={e => setMessage(e.target.value)} />
        <button className="send" onClick={(e) => sendMessage(e)}>SEND!</button>
      </div>
    </li>
  );
}