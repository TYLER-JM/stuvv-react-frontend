import React, { useState } from 'react'
import axios from "axios";

export default function Form() {


  const [text, setText] = useState("");
  const [images, setImages] = useState([]);

  const sendRequest = () => {

    const data = new FormData();
    // data.append('pics', images);

    for (let img of images) {
      data.append('pics[]', img, img.name)
    }

    data.append('title', text);
    data.append('user_id', 4);

    return axios.post(`http://localhost:3000/listings`, data).then(resp => console.log("got to the then")).catch(error => console.error())
  }

  return (
    <form onSubmit={event => event.preventDefault()}>
      <h1>THE FORM</h1>
      <input type="text" onChange={event => setText(event.target.value)} />
      <input type="file" onChange={event => {
        setImages(event.target.files)
      }} multiple />
      <button onClick={() => sendRequest()}> submit</button>
    </form >
  );
}