import React from 'react'
import CardList from "../CardList.js"
import './MyStuvv.scss'
import { getThemeProps } from '@material-ui/styles';


export default function MyStuvv() {

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
  ]
  // return (
  //   <CardListItem
  //     title={cardData.title}
  //     description={cardData.description}
  //     availability={cardData.availability}
  //    />
  // )
  
  // const cards = props.cards.map((card) => {
  
  // return <ul className="my-stuvv-container">{cards}</ul>
  return <CardList cardsData={cardData} />
}