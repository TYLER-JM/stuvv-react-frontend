import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import MessageList from './MessageList';
import MessagesSideBar from './MessagesSideBar';
import './Messages.scss';
import Register from '../Login/RegisterModal';
import SavingModal from '../SavingModal'


export default function Messages(props) {
  const [messages, setMessages] = useState([]);
  const [convo, setConvo] = useState(0);
  const [cssStyle, setCssStyle] = useState();
  const [loading, setLoading] = useState(true)
  const [register, setRegister] = useState(false)

  //to show login if user tries to access this page without being logged in
  setTimeout(() => {
    setLoading(false)
    setRegister(true)
  }, 700)

  //sets the css based on the tab clicked
  const handleClick = function (event) {
    setCssStyle(event.target.innerHTML);
  }

  //get the messaged information depending on the tab clicked
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

  //loops over all messages for this user and builds each conversation separately
  const conversations = messages.map((conversation, i) => {
    return (
      <MessageList
        key={i}
        conversationObject={conversation}
        sentBy={conversation.from_user}
        convo={convo}
        user={props.user}
        uniqueid={`convo${i}`}
        tabSelected={cssStyle}
      />
    )
  })

  //mounts the side bar with user name and product name
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

  //if there's a user logged in show the page, otherwise show login modal
  if (props.user.id) {
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
              }}>My stuvv</div>
              <div className="outbound" onClick={(e) => {
                handleClick(e)
                fetchMessages("outbound")
              }}>My requests</div>
            </div>
            <div className={cssStyle === "My stuvv" ? "side-bar-body-inbound" : "side-bar-body-outbound"}>
              {names}
            </div>
          </div>
          <div className="message-list-body">
            {/* <ul className="message-list"> */}
            <ul className={cssStyle === "My stuvv" ? "message-list-inbound" : "message-list-outbound"}>

              {conversations}
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <Fragment>

        <SavingModal
          show={loading}
          onHide={() => window.location.pathname = "/"}
          line="loading"
        />
        <Register show={register} onHide={() => window.location.pathname = "/"} />

      </Fragment>
    )
  }
}