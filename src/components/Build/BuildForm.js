import React from 'react'
import UploadForm from '../UploadForm'
import '../UploadFormHideInput.scss'


export default function BuildForm(props) {

  return (
    <div>
      <div className="build-form-banner">
        Build your listing
      </div>
        <UploadForm userId={props.userId} />
    </div>
  );
}
      