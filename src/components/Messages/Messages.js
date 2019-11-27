import React, { useEffect, useState } from 'react'
import MessagesHelper from '../../helpers/MessagesHelper';
import axios from 'axios'
import MessageList from './MessageList'

export default function Messages(props) {
  const [messages, setMessages] = useState([])
  // const [conversation, setConversation] = useState({})
  useEffect(() => {
    //param === to_user_id
    // axios.get("http://localhost:3000/messages/5", { withCredentials: true})
    axios.get(`http://localhost:3000/messages/${props.userId}`, { withCredentials: true})
      .then(resp => {
        console.log("GOT SOMETHING FOR MESSAGES: ", resp.data);
        setMessages(resp.data)
      })
      .catch(error => console.log(error))

      return function cleanup() {
        console.log("all done");
      }
  },[]);

  // resp.data[0].conversation

  const conversations = messages.map((conversation, i) => {
    return (
        <MessageList key={i} conversationObject={conversation} />
    )
  })
  return (
    <>
    <h1>Messages go here!</h1>
    <ul>
      {conversations}
    </ul>

    {/* <button onClick={() => setChange(2)}>GET MESSAGES</button> */}
    </>
  );
}