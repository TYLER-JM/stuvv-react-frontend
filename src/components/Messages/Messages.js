import React, { useEffect, useState } from 'react'
import MessagesHelper from '../../helpers/MessagesHelper';
import axios from 'axios'
import MessageList from './MessageList'
import './Messages.scss'

export default function Messages(props) {
  const [messages, setMessages] = useState([])
  // const [single, setSingle] = useState({
  //   sender: props.userId,
  //   content: "",
  //   sent: new Date()
  // })
  // const [conversation, setConversation] = useState({})
  useEffect(() => {
    //param === to_user_id
    // axios.get("http://localhost:3000/messages/5", { withCredentials: true})
    axios.get(`http://localhost:3000/messages/${props.userId}`, { withCredentials: true })
      .then(resp => {
        console.log("GOT SOMETHING FOR MESSAGES: ", resp.data);
        setMessages(resp.data)
      })
      .catch(error => console.log(error))

    return function cleanup() {
      console.log("all done");
    }
  }, []);

  // const sendMessage = function() {
  //   // event.preventDefault();
  //   useEffect(() => {
  //     //send the single state as the data
  //     axios.put(`http://localhost:3000/messages/`)
  //   },[]);

  // }


  const conversations = messages.map((conversation, i) => {
    return (
      <MessageList key={i} conversationObject={conversation} userId={props.userId} />
    )
  })
  return (
    <div>
      <div className="messagesBanner">
        Messages
      </div>
    <ul>
      {conversations}
    </ul>
   

    {/* <button onClick={() => setChange(2)}>GET MESSAGES</button> */}
    </div>
  );
}