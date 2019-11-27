import React from 'react'
import UploadForm from '../UploadForm'


export default function BuildForm(props) {

  return (
    <div>
      <h2>WELCOME TO THE BUILD FORM</h2>
      
      <UploadForm userId={props.userId}/>
    </div>
  );
}