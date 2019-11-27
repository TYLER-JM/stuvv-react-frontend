import React from 'react'
import UploadForm from '../UploadForm'
import '../UploadFormHideInput.scss'


export default function BuildForm() {

  return (
    <div>
      <div className="build-form-banner">
        Build your listing
      </div>
        <UploadForm />
    </div>
  );
}
      