import React, { useState } from 'react'
import axios from 'axios'
import MessageList from './MessageList';
import MessagesSideBar from './MessagesSideBar';
import './Messages.scss';
import Register from '../Login/RegisterModal';


export default function Messages(props) {
  const [messages, setMessages] = useState([]);
  const [convo, setConvo] = useState(0);
  // const [display, setDisplay] = useState("inbound");

  // const [single, setSingle] = useState({
  //   sender: props.userId,
  //   content: "",
  //   sent: new Date()
  // })
  // const [conversation, setConversation] = useState({})

  // let display = "inbound";

  // useEffect(() => {
  function fetchMessages(display) {
    // console.log("display state now: ", display)

    if (display === "inbound") {
      return axios.get(`http://localhost:3000/messages/inbound/${props.user.id}`, { withCredentials: true })
        .then(resp => {
          console.log("GOT INBOUND MESSAGES: ", resp.data);
          setMessages(resp.data)
        })
        .catch(error => console.log(error))

    }

    if (display === "outbound") {
      return axios.get(`http://localhost:3000/messages/outbound/${props.user.id}`, { withCredentials: true })
        .then(resp => {
          console.log("GOT OUTBOUND MESSAGES: ", resp.data);
          setMessages(resp.data)
        })
        .catch(error => console.log(error))
    }

    // return function cleanup() {
    //   console.log("all done");
    // }
  }
  // }, [props.user.id]);


  // const sendMessage = function() {
  //   // event.preventDefault();
  //   useEffect(() => {
  //     //send the single state as the data
  //     axios.put(`http://localhost:3000/messages/`)
  //   },[]);

  // }


  const conversations = messages.map((conversation, i) => {
    return (
      <MessageList
        key={i}
        conversationObject={conversation}
        // listingObject={conversation.listing}
        sentBy={conversation.from_user}
        convo={convo}
        user={props.user}
        // uniqueid={`${conversation.listing.title}${conversation.to_user.first_name}${conversation.from_user.first_name}`}
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

  if (props.user.id) {
    return (
      <div className="messages">
        <div className="messagesBanner">
          Messages
        </div>
        <div className="messages-container">
          <div className="tab">
            <span onClick={() => {
              fetchMessages("inbound")
            }}>inbound</span>
            <span onClick={() => {
              fetchMessages("outbound")
            }}>outbound</span>
          </div>
          <div className="side-bar-body">
            {names}

          </div>
          <div className="message-list-body">
            <ul className="message-list">
              {conversations}
            </ul>
          </div>
        </div>



        {/* <button onClick={() => setChange(2)}>GET MESSAGES</button> */}
      </div>
    );

  } else {
    return (<Register show="true" onHide={() => window.location.pathname = "/"} />)

  }
}