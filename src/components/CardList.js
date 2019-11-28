import React from "react";
import CardListItem from "./CardListItem";
import CardBlank from "./CardBlank";

export default function CardList(props) {
  console.log("from cardlist.js", props.user)

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
          owner={card.user_id}
          user={props.user}
        />
      </div>
    )
  })

  return (
    <ul className="my-stuvv-container">
      {window.location.pathname === "/my_stuvv" ? <CardBlank /> : null}
      {cards}
    </ul>
  )

}