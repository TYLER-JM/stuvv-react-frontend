import axios from 'axios';
import Button from 'react-bootstrap/Button'
import classNames from 'classnames';
import Icon from '@material-ui/core/Icon';
import MessageListItem from './MessageListItem';
import React, { useState, useEffect, Fragment } from 'react'
import Spinner from 'react-bootstrap/Spinner'

import './Messages.scss'


export default function MessageList(props) {

  console.log("the unique identifier: ", props.uniqueid)

  const [conversation, setConversation] = useState(JSON.parse(props.conversationObject.conversation));
  // const [conversation, setConversation] = useState([]);
  const [message, setMessage] = useState("");


  const [confirmation, setConfirmation] = useState("");
  const [title, setTitle] = useState(props.conversationObject.request.approved !== 0 ? props.conversationObject.request.approved === 1 ? "Booked for " : "Declined for " : "Interested in booking for ");

  useEffect(() => {
    setConversation(JSON.parse(props.conversationObject.conversation))
  },[props.conversationObject.conversation])

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

    setConfirmation(
      <div className="processing">
        <Spinner animation="border" className="custom-height-spinner" />
      </div>
    )


    console.log(confirmation)
    return axios.put(`http://localhost:3000/requests/${props.conversationObject.request.id}`, { request: status }, { withCredentials: true })
      .then(resp => {
        console.log("Patch was done and this is now approved: ", resp.data);

        setTimeout(() => {
          setConfirmation(
            <div className="processing">
              <Icon className={classNames("fa", {
                "fa-check-circle": status > 0,
                "fa-times-circle": status < 0
              })} />
            </div>
          )
        }, 500)
        setTimeout(() => {
          setAcceptButtons(null)
          setConfirmation(null)
          setTitle(status > 0 ? "Booked for " : "Declined for ")
        }, 1000)
      })
      .catch(error => console.log(error))
  }

  const [acceptButtons, setAcceptButtons] = useState((
    <Fragment>
      <div className="buttons-message">
        <Button
          variant="outline-success"
          onClick={() => {
            setConfirmation("This request has been validated");
            handleAccept(1);
          }}
        >
          Accept
        </Button>
        <Button
          variant="outline-secondary"
          onClick={() =>
            handleAccept(-1)
          }
        >
          Decline
        </Button>
        {/* {confirmation} */}
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
      <MessageListItem
        key={i}
        messageObject={msg}
        user={props.user}
        cssStyle={props.cssStyle}
      />
    )
  })

  const startDate = new Date(props.conversationObject.request.start_date).toUTCString()
  const endDate = new Date(props.conversationObject.request.end_date).toUTCString()

  return (
    <li className={classNames("single-conversation", { "hidden": props.uniqueid !== props.convo })}>


      {bubbles}

      {confirmation}
      {props.tabSelected === "My stuvv" ? props.conversationObject.request.approved === 0 ? acceptButtons : null : null}

      <div className="search-input">
        <input className="input-field" type="text" value={message} onChange={e => setMessage(e.target.value)} />
        <button className="send" onClick={(e) => sendMessage(e)}>SEND!</button>
        <div className="booking-info">{title}{startDate.slice(0, 16)} until {endDate.slice(0, 16)}</div> 
      </div>
    </li>
  );
}