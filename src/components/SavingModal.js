import React from 'react';
import Modal from "react-bootstrap/Modal"
import Spinner from "react-bootstrap/Spinner"
import './SavingModal.scss'




export default function SavingModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-content"
    // dialogClassName="spinning"

    >
      {props.line}
      <Spinner animation="border" variant="warning" />

    </Modal>
  );
}