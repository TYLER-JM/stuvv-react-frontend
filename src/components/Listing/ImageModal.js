import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal"
import Carousel from 'react-bootstrap/Carousel'
import './ImageModal.scss'




export default function ImageModal(props) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  const images = props.urls.map((img, i) => {
    return (

      <Carousel.Item
        key={i}
      >
        <img
          src={img.url}
          alt={`listing ${i + 1}`}
        />
      </Carousel.Item>
    )
  })

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      dialogClassName="zooming"
    >
      <Carousel activeIndex={index} direction={direction} onSelect={handleSelect} interval={null} className="images">
        {images}
      </Carousel>

    </Modal>
  );
}