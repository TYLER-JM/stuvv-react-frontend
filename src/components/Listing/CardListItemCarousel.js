import React, { useState, Fragment } from "react";
import Carousel from 'react-bootstrap/Carousel'
import ImageModal from '../ImageModal'
import './CarouselOverride.scss'

export default function CardListItemCarousel(props) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const [modalShow, setModalShow] = useState(false);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  const images = props.urls.map((img, i) => {
    return (
      <Carousel.Item
        key={i}
        onClick={(e) => {
          setModalShow(true)
        }}
      >
        <img
          className="d-block w-100"
          src={img.url}
          alt={`listing ${i + 1}`}
        />

      </Carousel.Item>
    )
  })

  return (
    <Fragment>
      <Carousel activeIndex={index} direction={direction} onSelect={handleSelect} interval={null}>
        {images}

      </Carousel>
      <ImageModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        urls={props.urls}
        description={props.description}
      />
    </Fragment>
  );
}

