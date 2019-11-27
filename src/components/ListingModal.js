import React from "react";
import Modal from "react-bootstrap/Modal"
// import Form from "./UploadForm";
// import UploadForm from "./UploadForm";
import Button from "react-bootstrap/Button";
import RequestForm from "./Request/RequestForm";
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
          {`Request Stuvv ${props.listingId}`}
        </Modal.Title>
      {/* </Modal.Header> */}
      <Modal.Body>
        <RequestForm listingId={props.listingId} />
        {/* <UploadForm /> */}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}