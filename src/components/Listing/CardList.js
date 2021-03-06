import React from "react";
import CardListItem from "./CardListItem";
import CardBlank from "./CardBlank";

export default function CardList(props) {

  const cards = props.cardsData.map((card, i) => {

    if (card.availability && window.location.pathname === "/") {

      return (
        <div key={i}>
          <CardListItem
            listingid={card.id}
            title={card.title}
            description={card.description}
            availability={card.availability}
            urls={card.image_urls}
            price={Math.round(card.price_per_day / 100)}
            owner={card.user}
            user={props.user}
            setBuildState={props.setBuildState}
            setList={props.setList}
          />
        </div>
      )
    } else if (window.location.pathname === "/my_stuvv") {
      return (
        <div key={i}>
          <CardListItem
            listingid={card.id}
            title={card.title}
            description={card.description}
            availability={card.availability}
            urls={card.image_urls}
            price={Math.round(card.price_per_day / 100)}
            owner={card.user}
            user={props.user}
            setBuildState={props.setBuildState}
            setList={props.setList}
          />
        </div>
      )
    }
  })

  return (
    <div className="card-container">
      {window.location.pathname === "/my_stuvv" ? <CardBlank /> : null}
      {cards}
    </div>
  )

}