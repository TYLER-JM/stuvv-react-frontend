import React, { useState } from 'react'
import MessageListItem from './MessageListItem';
import axios from 'axios';
import classNames from 'classnames';


export default function MessageList(props) {
  // console.log("the conversation inside the ML TYPE", JSON.parse(props.conversationObject.conversation))

  const [message, setMessage] = useState([]);

  const sendMessage = function () {
    // event.preventDefault();
    // useEffect(() => {
    //send the single state as the data
    axios.put(`http://localhost:3000/messages/${props.conversationObject.id}`, { message: JSON.stringify(message) }, { withCredential: true })
      .then(resp => {
        console.log("got a response after updating the conversation");
      })
      .catch(err => {
        console.log("error is: ", err);
      })
    // },[]);

  }
  const parsedConvo = JSON.parse(props.conversationObject.conversation)

  const bubbles = parsedConvo.map((msg, i) => {
    return (
      <MessageListItem key={i} messageObject={msg} user={props.user} />
    )
  })

  return (
    <li className={classNames({ "hidden": props.sentBy.first_name !== props.convo })}>
      {/* <p>{props.conversationObject.id}</p> */}
      {bubbles}
      {/* <input type="text" onChange={e => setSingle([single[single], content: e.target.value ])} /> */}
      <input type="text" onChange={e => setMessage([...parsedConvo,
      {
        sender: props.user.first_name, //current logged in user
        content: e.target.value,
        sent: new Date()
      }]
      )} />
      <button onClick={() => sendMessage()}>SEND!</button>
    </li>

  );
}