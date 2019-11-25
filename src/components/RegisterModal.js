import React from 'react'
import Modal from "react-bootstrap/Modal";
import RegisterForm from './RegisterForm';

export default function Register(props) {
  return (
    <Modal
      {...props}
      dialogClassName="register-modal"
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered >


      <RegisterForm />
    </Modal >
  );
}