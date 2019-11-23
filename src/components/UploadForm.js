import React, { useState } from 'react'
import axios from "axios";

export default function Form() {


  const [text, setText] = useState("");
  const [images, setImages] = useState([]);

  console.log('image', images);
  const sendRequest = () => {
    console.log('got to the sendRequest function', images)
    const data = new FormData();
    // data.append('pics', images);

    for (let img of images) {
      data.append('pics[]', img, img.name)
    }

    data.append('title', text);
    data.append('user_id', 4);
    let state = {
      "title": text,
      "pics": data,
      "user_id": 4
    }
    // setTimeout(() => { console.log("this is the data variable", data) }, 3000);
    console.log("IMAGES:", images)
    console.log('DATA', data)
    return axios.post(`http://localhost:3000/listings`, data).then(resp => console.log("got to the then")).catch(error => console.error())

    // return fetch('http://localhost:3000/listings', { method: 'POST', body: data }).then(resp => console.log("got to the then")).catch(error => console.error())
  }

  return (
    <form onSubmit={event => event.preventDefault()}>
      <h1>THE FORM</h1>
      <input type="text" onChange={event => setText(event.target.value)} />
      <input type="file" onChange={event => {
        console.log('event files', event.target.files);
        setImages(event.target.files)
      }} multiple />
      {/* <button onClick={(event) => setImages(event.target.previousSibling.files)}> Upload!!</button> */}
      <button onClick={() => sendRequest()}> submit</button>
    </form >
  );
}