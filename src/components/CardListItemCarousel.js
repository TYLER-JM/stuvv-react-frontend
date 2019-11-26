import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel'
// import Camera from './camera.jpg'
// import Shoe from './shoe.jpg'
import './CarouselOverride.scss'

export default function CardListItemCarousel(props) {
  // console.log("CLIC props: ", props)
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  const images = props.urls.map((img, i) => {
    // console.log(`Carousel loop: ${i}, url: ${img.url}`)
    return (
      // <li key={i}>
      <Carousel.Item key={i}>
        <img
          className="d-block w-100"
          src={img.url}
          alt={`listing ${i + 1}`}
        />
      </Carousel.Item>
      // </li>
    )
  })

  return (
    <Carousel activeIndex={index} direction={direction} onSelect={handleSelect} interval={null}>
      {/* <ul> */}
      {images}
      {/* </ul> */}
      {/* <Carousel.Item>
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
      </Carousel.Item> */}
    </Carousel>
  );
}

