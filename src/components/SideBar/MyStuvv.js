import React, { useState, useEffect } from 'react'
import CardList from "../CardList.js"
import './MyStuvv.scss'
// import { getThemeProps } from '@material-ui/styles';
import ListingHelper from '../../helpers/ListingHelper.js';
import Axios from 'axios';


export default function MyStuvv(props) {
  // const listings = ListingHelper()

  // const [list, setList] = useState([])

  // useEffect(() => {
  //   Axios.get(`http://localhost:3000/userslistings/${props.user.id}`, {withCredentials: true })
  //     .then(resp => {
  //       console.log("the users listings", resp.data);
  //       setList(resp.data);
  //       console.log("logged in as: ", props.user.id)
  //     })
  //     .catch(error => console.log(error))
  // },[])

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
  // ]
  // return (
  //   <CardListItem
  //     title={cardData.title}
  //     description={cardData.description}
  //     availability={cardData.availability}
  //    />
  // )

  // const cards = props.cards.map((card) => {

  // return <ul className="my-stuvv-container">{cards}</ul>
  // return <CardList cardsData={list} />
  return <CardList cardsData={props.list} />
}