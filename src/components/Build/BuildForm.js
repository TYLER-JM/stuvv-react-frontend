import React from 'react'
import UploadForm from '../UploadForm'
import '../UploadFormHideInput.scss'


export default function BuildForm() {

  return (
    <div className="form-container">
      <h2>WELCOME TO THE BUILD FORM</h2>
      
      <UploadForm />
    </div>
  );
}