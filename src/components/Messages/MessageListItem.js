import React from 'react'
import classNames from 'classnames'

//will take in the conversation ARRAY from the conversationObject as a prop
//and loop over the array to render new messageListItems
export default function MessageListItem(props) {
  // console.log("ID of message: ", props.messageObject.id)

  return (
      // <div className="message-list-item user-message">
      <div className={classNames("message-list-item",
        {
          "user-message": props.user.first_name === props.messageObject.sender,
          "non-user-message": props.user.first_name !== props.messageObject.sender
        })}>
        {/* <span><strong>{`${props.messageObject.sender} says: `}</strong></span> */}
        {/* <span className="my-stuff">{props.messageObject.content}</span> */}
        <span className={classNames({"my-stuff": props.cssStyle === "My stuvv"})}>{props.messageObject.content}</span>
      </div>
  );
}