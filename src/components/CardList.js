import React, { useState } from "react";
import CardListItem from "./CardListItem";

export default function CardList({ cardsData }) {
  // const [modalShow, setModalShow] = useState(false);

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
    // console.log("CardList cardsData: ", cardsData)
    return (
      <div>
        <CardListItem
          listingId={card.id}
          title={card.title}
          description={card.description}
          availability={card.availability}
          urls={card.image_urls}
          price={card.price_per_day / 100}
        />
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