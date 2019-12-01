import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal"
import Carousel from 'react-bootstrap/Carousel'
// import './SavingModal.scss'




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
        {/* <Carousel.Caption>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
    )
  })

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    // dialogClassName="spinning"
    >
      <Carousel activeIndex={index} direction={direction} onSelect={handleSelect} interval={null}>
        {/* <Carousel> */}
        {images}
      </Carousel>

      {/* <img
        src={props.url}
        alt={`zoom`}
      /> */}
      {/* <div>Description</div> */}

    </Modal>
  );
}