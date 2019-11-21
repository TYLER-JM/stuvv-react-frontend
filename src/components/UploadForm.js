import React, { useState } from 'react'
import axios from "axios";

export default function Form() {


  const [text, setText] = useState("");
  const [images, setImages] = useState([]);


  const sendRequest = () => {
    console.log('got to the sendRequest function')
    let state = {
      "title": text,
      "images": images
    }

    return axios.post(`http://localhost:3000/listings`, state).then(resp => console.log("got to the then")).catch(error => console.error())
  }

  return (
    <form onSubmit={event => event.preventDefault()}>
      <h1>THE FORM</h1>
      <input type="text" onChange={event => setText(event.target.value)} />
      <input type="file" onChange={event => setImages([...images, event.target.value])} />
      <button onClick={() => sendRequest()}>submit</button>
    </form >
  );
}