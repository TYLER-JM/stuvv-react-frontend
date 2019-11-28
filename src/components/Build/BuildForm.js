import React, { useEffect, useState } from 'react'
import UploadForm from '../UploadForm'
import '../UploadFormHideInput.scss'
import axios from 'axios';


export default function BuildForm(props) {
  // const [currentUser, setCurrentUser] = useState();
  console.log('Props.buildState is ====>', props.buildState)

  // useEffect(() => {
  //   axios.get('http://localhost:3000/profiles/me', { withCredentials: true })
  //     .then((resp) => {
  //       setCurrentUser(resp.data)
  //     })
  //     .catch(err => console.log("error:", err));
  // }, [])
  return (
    <div>
      <div className="build-form-banner">
        Build your listing
      </div>
      <UploadForm userId={props.userId} buildState={props.buildState}/>
        {/* <UploadForm userId={currentUser.id}/> */}
    </div>
  );
}
      