import React from "react";
import Modal from "react-bootstrap/Modal"
import Form from "./UploadForm";
import UploadForm from "./UploadForm";
import Button from "react-bootstrap/Button";


export default function ListingModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <UploadForm />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}