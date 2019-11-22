import React, { useState } from 'react'
import axios from "axios";

export default function Form() {


  const [text, setText] = useState("");
  const [images, setImages] = useState('');

  console.log('image', images);
  const sendRequest = () => {
    console.log('got to the sendRequest function', images)
    const data = new FormData();
    data.append('pics', images);
    data.append('title', text);
    data.append('user_id', 4);
    console.log('DATA', data)
    let state = {
      "title": text,
      "pics": data,
      "user_id": 4
    }

    return axios.post(`http://localhost:3000/listings`, data).then(resp => console.log("got to the then")).catch(error => console.error())
  }

  return (
    <form onSubmit={event => event.preventDefault()}>
      <h1>THE FORM</h1>
      <input type="text" onChange={event => setText(event.target.value)} />
      <input type="file" onChange={event => {
        console.log('event files', event.target.files[0]);
        setImages(event.target.files[0])
      }} />
      <button onClick={() => sendRequest()}>submit</button>
    </form >
  );
}