import React from 'react'
import classNames from 'classnames'


export default function MessageListItem(props) {

  return (
      <div className={classNames("message-list-item",
        {
          "user-message": props.user.first_name === props.messageObject.sender,
          "non-user-message": props.user.first_name !== props.messageObject.sender
        })}>
        {/* <span><strong>{`${props.messageObject.sender} says: `}</strong></span> */}
        <span className={classNames({"my-stuff": props.cssStyle === "My stuvv"})}>{props.messageObject.content}</span>
      </div>
  );
}