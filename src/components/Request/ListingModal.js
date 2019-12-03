import React from "react";
import Modal from "react-bootstrap/Modal"
import RequestForm from "./RequestForm";
import './ListingModal.scss'


export default function ListingModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      dialogClassName="listing-modal"

    >
      <Modal.Title id="contained-modal-title-vcenter">
        {`Submit a request for ${props.title}`}
      </Modal.Title>
      <Modal.Body>
        <RequestForm listingid={props.listingid} user={props.user} listingowner={props.listingowner} />
      </Modal.Body>
    </Modal>
  );
}