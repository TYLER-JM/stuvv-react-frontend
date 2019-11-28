import React, { useEffect, useState } from 'react'
import MessagesHelper from '../../helpers/MessagesHelper';
import axios from 'axios'
import MessageList from './MessageList';
import MessagesSideBar from './MessagesSideBar';
import classNames from 'classnames';
import './Messages.scss';


export default function Messages(props) {
  const [messages, setMessages] = useState([]);
  const [convo, setConvo] = useState(0);

  // const [single, setSingle] = useState({
  //   sender: props.userId,
  //   content: "",
  //   sent: new Date()
  // })
  // const [conversation, setConversation] = useState({})
  useEffect(() => {
    //param === to_user_id
    // axios.get("http://localhost:3000/messages/5", { withCredentials: true})
    axios.get(`http://localhost:3000/messages/${props.user.id}`, { withCredentials: true })
      .then(resp => {
        console.log("GOT SOMETHING FOR MESSAGES: ", resp.data);
        setMessages(resp.data)
      })
      .catch(error => console.log(error))

    return function cleanup() {
      console.log("all done");
    }
  }, [props.user.id]);

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