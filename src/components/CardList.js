import React from "react";
import CardListItem from "./CardListItem";
import CardBlank from "./CardBlank";

// export default function CardList({ cardsData}) {
export default function CardList(props) {
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

  const cards = props.cardsData.map((card, i) => {
    // console.log("CardList cardsData: ", cardsData)
    return (
      <div key={i}>
        <CardListItem
          listingId={card.id}
          title={card.title}
          description={card.description}
          availability={card.availability}
          urls={card.image_urls}
          price={card.price_per_day / 100}
          user={card.user_id}
          userId={props.userId}
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

  return (
    <ul className="my-stuvv-container">
      {window.location.pathname === "/my_stuvv" ? <CardBlank /> : null}
      {cards}
    </ul>
  )

}