import React from "react";
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button";
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
      {/* <Modal.Header closeButton> */}
      <Modal.Title id="contained-modal-title-vcenter">
        {`Submit a request for ${props.listingId}`}
      </Modal.Title>
      {/* </Modal.Header> */}
      <Modal.Body>
        <RequestForm listingId={props.listingId} user={props.user} listingOwner={props.listingOwner} />
        {/* <UploadForm /> */}
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}