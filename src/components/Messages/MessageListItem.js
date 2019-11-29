import React from 'react'

//will take in the conversation ARRAY from the conversationObject as a prop
//and loop over the array to render new messageListItems
export default function MessageListItem(props) {
  // console.log("ID of message: ", props.messageObject.id)

  return (
      <div className="message-list-item">
        <span><strong>{`${props.messageObject.sender} says: `}</strong></span>
        <span>{props.messageObject.content}</span>
      </div>
  );
}