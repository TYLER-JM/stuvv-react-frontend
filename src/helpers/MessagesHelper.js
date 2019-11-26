import React, { useEffect } from 'react'
import axios from 'axios';

export default function MessagesHelper() {

  useEffect(() => {
    axios.get("http://localhost:3000/messages/5", { withCredentials: true})
      .then(resp => {
        console.log("GOT SOMETHING FOR MESSAGES: ", resp);
      })
      .catch(error => console.log(error))

      return function cleanup() {
        console.log("all done");
      }
  },[]);

};