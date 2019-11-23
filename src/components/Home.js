import React from 'react'
import Form from './UploadForm'
import SideBar from "./SideBar/index"
import CardList from "./CardList"
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


  return (
    <div>
      {/* <h1>Welcome to the home page</h1> */}
      {/* < SideBar /> */}
      < CardList cardsData={listings} />
      < Form />
    </div>
  );
}
