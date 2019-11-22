import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel'
import Camera from './camera.jpg'
import Shoe from './shoe.jpg'

export default function CardListItemCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <Carousel activeIndex={index} direction={direction} onSelect={handleSelect} interval={null}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Camera}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Shoe}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

