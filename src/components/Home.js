import React from 'react'
import Form from './UploadForm'
import SideBar from "./SideBar/index"
import CardList from "./CardList"


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
  return (
    <div>
      {/* <h1>Welcome to the home page</h1> */}
      {/* < SideBar /> */}
      < CardList cardsData={cardData} />
      < Form />
    </div>
  );
}
