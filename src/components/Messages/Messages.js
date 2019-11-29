import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MessageList from './MessageList';
import MessagesSideBar from './MessagesSideBar';
import './Messages.scss';


export default function Messages(props) {
  const [messages, setMessages] = useState([]);
  const [convo, setConvo] = useState(0);
  const [display, setDisplay] = useState("inbound");

  // const [single, setSingle] = useState({
  //   sender: props.userId,
  //   content: "",
  //   sent: new Date()
  // })
  // const [conversation, setConversation] = useState({})

  // let display = "inbound";

  // useEffect(() => {
  function fetchEmail() {

    if (display === "inbound") {
      axios.get(`http://localhost:3000/messages/inbound/${props.user.id}`, { withCredentials: true })
        .then(resp => {
          console.log("GOT INBOUND MESSAGES: ", resp.data);
          setMessages(resp.data)
        })
        .catch(error => console.log(error))

    } else {
      axios.get(`http://localhost:3000/messages/outbound/${props.user.id}`, { withCredentials: true })
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

  fetchEmail()

  // const sendMessage = function() {
  //   // event.preventDefault();
  //   useEffect(() => {
  //     //send the single state as the data
  //     axios.put(`http://localhost:3000/messages/`)
  //   },[]);

  // }


  const conversations = messages.map((conversation, i) => {
    return (
      <MessageList key={i} conversationObject={conversation} sentBy={conversation.from_user} convo={convo} user={props.user} />
    )
  })

  const names = messages.map((conversation, i) => {
    return (
      <MessagesSideBar key={i} sentBy={conversation.from_user} setConvo={setConvo} convo={convo} />
    )
  })
  return (
    <div>
      <div className="messagesBanner">
        Messages
      </div>
      <div className="messages-container">
        <div className="tab">
          <span onClick={() => {
            setDisplay("inbound")
            fetchEmail()
          }}>inbound</span>
          <span onClick={() => {
            setDisplay("outbound")
            fetchEmail()
          }}>outbound</span>
        </div>
        <div className="side-bar-body">
          {/* <MessagesSideBar /> */}
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
}