import React, { useState } from 'react'
import axios from 'axios'
import MessageList from './MessageList';
import MessagesSideBar from './MessagesSideBar';
import './Messages.scss';
import classNames from 'classnames';



export default function Messages(props) {
  const [messages, setMessages] = useState([]);
  const [convo, setConvo] = useState(0);

  const [cssStyle , setCssStyle] = useState("");
  // const [display, setDisplay] = useState("inbound");

  // const [single, setSingle] = useState({
  //   sender: props.userId,
  //   content: "",
  //   sent: new Date()
  // })
  // const [conversation, setConversation] = useState({})

  // useEffect(() => {
  //   fetchMessages("inbound")
  //   console.log("USE EFFECT", useEffect)
  // },[])

  const handleClick = function(event) {
    setCssStyle(event.target.innerHTML);
    console.log("style now:", cssStyle);
  }

  // let displayStyle;

  // useEffect(() => {
  function fetchMessages(message) {
    // console.log("message state now: ", message)

    if (message === "inbound") {
      return axios.get(`http://localhost:3000/messages/inbound/${props.user.id}`, { withCredentials: true })
        .then(resp => {
          console.log("GOT INBOUND MESSAGES: ", resp.data);
          setMessages(resp.data)
        })
        .catch(error => console.log(error))

    }

    if (message === "outbound") {
      return axios.get(`http://localhost:3000/messages/outbound/${props.user.id}`, { withCredentials: true })
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


  // const sendMessage = function() {
  //   // event.preventDefault();
  //   useEffect(() => {
  //     //send the single state as the data
  //     axios.put(`http://localhost:3000/messages/`)
  //   },[]);

  // }


  const conversations = messages.map((conversation, i) => {
    return (
      <MessageList 
        key={i} 
        conversationObject={conversation} 
        // listingObject={conversation.listing}
        sentBy={conversation.from_user} 
        convo={convo} 
        user={props.user} 
        // uniqueid={`${conversation.listing.title}${conversation.to_user.first_name}${conversation.from_user.first_name}`}
        uniqueid={`convo${i}`}
      />
    )
  })



  const names = messages.map((conversation, i) => {
    return (
      <MessagesSideBar 
        key={i} 
        sentBy={conversation.from_user} 
        setConvo={setConvo} convo={convo} 
        listingObject={conversation.listing} 
        user={props.user}
        toUser={conversation.to_user}
        uniqueid={`convo${i}`}
      />
    )
  })
  return (
    <div>
      <div className="messagesBanner">
        Messages
      </div>
      <div className="messages-container">
        <div className="names-container">
        <div className="tab">
          <div className="inbound" onClick={(e) => {
            handleClick(e)
            // displayStyle = true;
            // console.log("DISPLAY inbound!!!", displayStyle)
            fetchMessages("inbound")
          }}><strong>inbound</strong></div>
          <div className="outbound" onClick={(e) => {
            handleClick(e)
            //  displayStyle = false;
            // console.log("DISPLAY outbound!!!", displayStyle)

            fetchMessages("outbound")
          }}><strong>outbound</strong></div>
          
        </div>
        {/* //////////////////////////SIDE BAR BODY/////////////////////////////////////// */}
        {/* <div className={displayStyle ? "side-bar-body-inbound" : "side-bar-body-outbound"}>  */}
        <div className={cssStyle === "inbound" ? "side-bar-body-inbound" : "side-bar-body-outbound"}> 
        {/* <li className={classNames({ "hidden": props.uniqueid !== props.convo })}> */}
        
          {names}

        </div>
        </div>
        <div className="message-list-body">
          <ul className={cssStyle === "inbound" ? "message-list-inbound" : "message-list-outbound"}>
            {conversations}
          </ul>
        </div>
      </div>



      {/* <button onClick={() => setChange(2)}>GET MESSAGES</button> */}
    </div>
  );
}