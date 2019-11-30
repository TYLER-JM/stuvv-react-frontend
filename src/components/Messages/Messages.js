import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MessageList from './MessageList';
import MessagesSideBar from './MessagesSideBar';
import './Messages.scss';
import Register from '../Login/RegisterModal';


export default function Messages(props) {
  const [messages, setMessages] = useState([]);
  const [convo, setConvo] = useState(0);
  const [cssStyle, setCssStyle] = useState();

  const handleClick = function (event) {
    setCssStyle(event.target.innerHTML);
  }

  function fetchMessages(message) {
    if (message === "inbound") {
      return axios.get(`http://localhost:3000/messages/inbound/${props.user.id}`, { withCredentials: true })
        .then(resp => {
          console.log("GOT INBOUND MESSAGES: ", resp.data);
          setMessages(resp.data)
        })
        .catch(error => console.log(error))

    }
    if (message === "outbound") {
      return axios.get(`http://localhost:3000/messages/outbound/${props.user.id}`, { withCredentials: true })
        .then(resp => {
          console.log("GOT OUTBOUND MESSAGES: ", resp.data);
          setMessages(resp.data)
        })
        .catch(error => console.log(error))
    }
  }

  const conversations = messages.map((conversation, i) => {
    return (
      <MessageList
        key={i}
        conversationObject={conversation}
        sentBy={conversation.from_user}
        convo={convo}
        user={props.user}
        uniqueid={`convo${i}`}
      />
    )
  })

  const names = messages.map((conversation, i) => {
    return (
      <MessagesSideBar
        key={i}
        sentBy={conversation.from_user}
        setConvo={setConvo} convo={convo}
        listingObject={conversation.listing}
        user={props.user}
        toUser={conversation.to_user}
        uniqueid={`convo${i}`}
      />
    )
  })

  useEffect(() => {
    fetchMessages("outbound")
  }, [props]);

  if (props.user.id) {
    // fetchMessages("outbound")

    return (
      <div className="messages">
        <div className="messagesBanner">
          Messages
      </div>
        <div className="messages-container">
          <div className="names-container">
            <div className="tab">
              <div className="inbound" onClick={(e) => {
                handleClick(e)
                fetchMessages("inbound")
              }}>my stuvv</div>
              <div className="outbound" onClick={(e) => {
                handleClick(e)
                fetchMessages("outbound")
              }}>requests</div>
            </div>
            <div className={cssStyle === "my stuvv" ? "side-bar-body-inbound" : "side-bar-body-outbound"}>
              {names}
            </div>
          </div>
          <div className="message-list-body">
            {/* <ul className="message-list"> */}
            <ul className={cssStyle === "inbound" ? "message-list-inbound" : "message-list-outbound"}>

              {conversations}
            </ul>
          </div>
        </div>
      </div>
    );

  } else {
    return (<Register show="true" onHide={() => window.location.pathname = "/"} />)
  }
}