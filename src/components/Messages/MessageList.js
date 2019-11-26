import React from 'react'
import MessageListItem from './MessageListItem';


export default function MessageList(props) {
  console.log("the conversation inside the ML TYPE", typeof JSON.parse(props.conversationObject.conversation))

  const messages = JSON.parse(props.conversationObject.conversation).map((message, i) => {
    return (
      <MessageListItem key={i} messageObject={message}/>
    )
  })

  return (
    <li>{messages}
    </li>
  );
}