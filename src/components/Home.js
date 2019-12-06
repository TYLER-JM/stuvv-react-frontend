import React, { useState, useEffect } from 'react'
import CardList from "./Listing/CardList"
import WelcomeVideo from './Welcome/WelcomeVideo'
import axios from 'axios';
import "./Home.scss"


export default function Home(props) {
  const [list, setList] = useState([])

  useEffect(() => {
    console.log(process.env)
    console.log(process.env.REACT_APP_DB_HOST)
    axios.get(`${process.env.REACT_APP_DB_HOST}/listings`, { withCredentials: true })
      .then(resp => {
        setList(resp.data)
      })
      .catch(error => console.log(error))

    return function cleanup() {
      console.log("all done");
    }

  }, [])

  const sendRequest = (search) => {
    return axios.post(`${process.env.REACT_APP_DB_HOST}/search`, { search }, { withCredentials: true })
      .then(resp => {
        console.log("RESP in SEARCH: ", resp)
        setList(resp.data)
        window.scrollBy(0, window.innerHeight);
      })
      .catch(error => console.error())
  }

  return (
    <div>
      <WelcomeVideo sendRequest={sendRequest} />
      <CardList cardsData={list} user={props.user} setBuildState={props.setBuildState} setList={setList} />
    </div>
  );
}


