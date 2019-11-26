import React from 'react'

//will take in the conversation ARRAY from the conversationObject as a prop
//and loop over the array to render new messageListItems
export default function MessageListItem(props) {

  return (
    <div>
      <span>{`${props.messageObject.sender} says: `}</span>
      <span>{props.messageObject.content}</span>
    </div>
  );
}