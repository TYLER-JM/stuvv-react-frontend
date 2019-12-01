import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal"
import Carousel from 'react-bootstrap/Carousel'
// import './SavingModal.scss'




export default function ImageModal(props) {
  // const [index, setIndex] = useState(0);
  // const [direction, setDirection] = useState(null);

  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  //   setDirection(e.direction);
  // };

  // const images = props.urls.map((img, i) => {
  //   return (

  // <Carousel.Item
  //   key={i}
  // >
  // <img
  //   className="d-block w-100"
  //   src={img.url}
  //   alt={`listing ${i + 1}`}
  // />

  //{/* </Carousel.Item> */}
  //   )
  // })

  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="example-modal-sizes-title-sm"
      centered
    // dialogClassName="spinning"
    >
      {/* <Carousel activeIndex={index} direction={direction} onSelect={handleSelect} interval={null}> */}
      {/* {images} */}
      <img
        // className="d-block w-100"
        src={props.url}
        alt={`zoom`}
      />
      {/* </Carousel> */}

      <div>Description</div>

    </Modal>
  );
}