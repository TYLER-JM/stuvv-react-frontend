import React, { useState } from "react";
import CardListItem from "./CardListItem";

export default function CardList({cardsData}) {
  const [modalShow, setModalShow] = useState(false);

  // const cardData = [
  //   {
  //     "title": "Tyler's Shoe",
  //     "description": "This is a nice shoe",
  //     "availability": true,
  //   },
  //   {
  //     "title": "Tyler's Shoe",
  //     "description": "This is a nice shoe",
  //     "availability": true,
  //   },
  //   {
  //     "title": "Tyler's Shoe",
  //     "description": "This is a nice shoe",
  //     "availability": true,
  //   },
  //   {
  //     "title": "Tyler's Shoe",
  //     "description": "This is a nice shoe",
  //     "availability": true,
  //   },
  // ]

  const cards = cardsData.map((card) => {
    return (
      <div>
        <CardListItem
        title={card.title}
        description={card.description}
        availability={card.availability} />
      </div>
    ) 
  })
  // return (
  //   <CardListItem
  //     title={cardData.title}
  //     description={cardData.description}
  //     availability={cardData.availability}
  //    />
  // )
  
  return <ul className="my-stuvv-container">{cards}</ul>
  
  
}