import React, { useState, Fragment } from "react";
import Carousel from 'react-bootstrap/Carousel'
import ImageModal from './ImageModal'
import './CarouselOverride.scss'

export default function CardListItemCarousel(props) {
  // console.log("CLIC props: ", props)
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [img, setImg] = useState([]);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  const images = props.urls.map((img, i) => {
    // console.log(`Carousel loop: ${i}, url: ${img.url}`)
    return (
      // <div>
      <Carousel.Item
        key={i}
        onClick={(e) => {
          setModalShow(true)
          setImg(e.target.src)
        }}
      >
        <img
          className="d-block w-100"
          src={img.url}
          alt={`listing ${i + 1}`}
        />

      </Carousel.Item>
      // </div> 
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
        url={img}
      />
    </Fragment>
  );
}

