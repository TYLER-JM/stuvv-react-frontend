import React from "react";
import CardListItem from "components/CardListItem";

export default function CardList(props) {
  const cardData = [
    {
      "title": "Tyler's Shoe",
      "description": "This is a nice shoe",
      "availability": true,
    }
  ]
  return (
    <CardListItem
      title={cardData.title}
      description={cardData.description}
      availability={cardData.availability}
     />
  )
}