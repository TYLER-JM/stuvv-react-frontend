import React from 'react'
import Form from './UploadForm'
import SideBar from "./SideBar/index"
import CardList from "./CardList"
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Handshake from './handshake.jpg'
import Video from './video.mp4'






export default function Home() {

  const cardData = [
    {
      "title": "Tyler's Shoe",
      "description": "This is a nice shoe",
      "availability": true,
    },
    {
      "title": "Tyler's Shoe",
      "description": "This is a nice shoe",
      "availability": true,
    },
    {
      "title": "Tyler's Shoe",
      "description": "This is a nice shoe",
      "availability": true,
    },
    {
      "title": "Tyler's Shoe",
      "description": "This is a nice shoe",
      "availability": true,
    },
  ]

  var sectionStyle = {
    width: "100%",
    height: "400px",
    backgroundImage: `url(${Handshake})`
  };

  return (
    <div>
      {/* <h1>Welcome to the home page</h1> */}
      {/* <Jumbotron> */}
      <Jumbotron  style={{  
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
      </Jumbotron> 
      < CardList cardsData={cardData} />
      < Form />
    </div>
  );
}
