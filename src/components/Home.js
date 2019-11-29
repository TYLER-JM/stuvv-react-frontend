import React, { useState, useEffect } from 'react'
import CardList from "./CardList"
import WelcomeVideo from './Welcome/WelcomeVideo'
import axios from 'axios';
import "./Home.scss"



export default function Home(props) {
  const [list, setList] = useState([])

  useEffect(() => {
    // setList(ListingHelper());

    console.log("in the use effect")

    axios.get("http://localhost:3000/listings", { withCredentials: true })
      .then(resp => {
        setList(resp.data)
        // listings = resp.data
      })
      .catch(error => console.log(error))

    return function cleanup() {
      console.log("all done");
    }

  }, [])

  const sendRequest = (search) => {
    return axios.post(`http://localhost:3000/search`, { search }, { withCredentials: true })
      .then(resp => {
        console.log("RESP in SEARCH: ", resp)
        setList(resp.data)
        window.location.hash = "search-results"
      })
      .catch(error => console.error())
  }

  return (
    <div>
      <WelcomeVideo sendRequest={sendRequest} />
        <CardList cardsData={list} user={props.user} setBuildState={props.setBuildState}/>
    </div>
  );
}

{/* <Jumbotron  style={{  
        backgroundImage: `url(${Handshake})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        opacity: .7,
        color: "white",
      }}> 
        <video autoPlay loop muted style={{width: "100%",
          height: "90%"}}>
          <source src={Video} type='video/mp4' />
        </video>
       <h1>Hello, world!</h1>
       <p>
        Stuvv allows you to rent your things while you're not using them!
       </p>
       <p>
         <Button variant="primary">Create A Listing</Button>
       </p>
      </Jumbotron>  */}


