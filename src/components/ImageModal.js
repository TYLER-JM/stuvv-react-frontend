import React from 'react';
import Modal from "react-bootstrap/Modal"
// import './SavingModal.scss'




export default function ImageModal(props) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="example-modal-sizes-title-sm"
      centered
    // dialogClassName="spinning"

    >
      {/* Posting your Stuvv!
      <Spinner animation="border" variant="warning" /> */}

      <img
        src={props.image}
        alt="zoom" />
      <div>Description</div>

    </Modal>
  );
}