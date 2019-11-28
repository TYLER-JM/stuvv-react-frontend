import React from 'react'
import CardList from "../CardList.js"
import './MyStuvv.scss'

export default function MyStuvv(props) {
  // const listings = ListingHelper()
  console.log("from mystuvv.js", props.user)
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
  return (
    <div>
      <div className="banner">
        My Stuvv
   </div>
      <CardList cardsData={props.list} user={props.user} setBuildState={props.setBuildState} />
    </div>
  )

}