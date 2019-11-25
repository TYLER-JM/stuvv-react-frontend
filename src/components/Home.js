import React from 'react'
import Form from './UploadForm'
import SideBar from "./SideBar/index"
import CardList from "./CardList"
import WelcomeVideo from './WelcomeVideo'
import Button from 'react-bootstrap/Button'
import Handshake from './handshake.jpg'
import Video from './video.mp4'
import "./Home.scss"







import ListingHelper from '../helpers/ListingHelper';


export default function Home() {


  // get the value from the helper and assign it to cardData

  const listings = ListingHelper();
  console.log("listing defined after calling helper", listings)
  const cardData = [
    {
      "title": "Tyler's Shoe",
      "description": "This is a nice shoe",
      "availability": true,
      "image_urls": [
        {
          "url": "https://lorempixel.com/300/300/technics"
        },
        {
          "url": "https://lorempixel.com/300/300/technics"
        },
      ]
    },
    {
      "title": "Tyler's Shoe",
      "description": "This is a nice shoe",
      "availability": true,
      "image_urls": [
        {
          "url": "https://lorempixel.com/300/300/technics"
        },
        {
          "url": "https://lorempixel.com/300/300/technics"
        },
      ]
    },
    {
      "title": "Tyler's Shoe",
      "description": "This is a nice shoe",
      "availability": true,
      "image_urls": [
        {
          "url": "https://lorempixel.com/300/300/technics"
        },
        {
          "url": "https://lorempixel.com/300/300/technics"
        },
        {
          "url": "https://lorempixel.com/300/300/technics"
        },
      ]
    },
    {
      "title": "Tyler's Shoe",
      "description": "This is a nice shoe",
      "availability": true,
      "image_urls": [
        {
          "url": "https://lorempixel.com/300/300/technics"
        },
        {
          "url": "https://lorempixel.com/300/300/technics"
        },
      ]
    },
  ]

  // use this if we use a background image > video
  var sectionStyle = {
    width: "100%",
    height: "400px",
    backgroundImage: `url(${Handshake})`
  };

  return (
    <div>
      <WelcomeVideo />
      < CardList cardsData={cardData} />
      {/* < SideBar /> */}
      < CardList cardsData={listings} />
      < Form />
    </div>
  );
}


// not sure if we'll need this later...keep for now

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
     
     
