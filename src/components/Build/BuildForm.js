import React, { useState, Fragment } from 'react'
import UploadForm from '../UploadForm'
import '../UploadFormHideInput.scss'
import Register from '../Login/RegisterModal';
import SavingModal from '../SavingModal'


export default function BuildForm(props) {
  const [loading, setLoading] = useState(true)
  const [register, setRegister] = useState(false)

  setTimeout(() => {
    setLoading(false)
    setRegister(true)
  }, 700)

  if (props.user.id) {
    return (
      <div>
        <div className="build-form-banner">
          Build your listing
      </div>
        {/* <UploadForm userId={props.userId} buildState={props.buildState}/> */}

        <UploadForm user={props.user} buildState={props.buildState} />
      </div>
    );
  } else {
    return (
      <Fragment>

        <SavingModal
          show={loading}
          onHide={() => window.location.pathname = "/"}
          line="loading"
        />
        <Register show={register} onHide={() => window.location.pathname = "/"} />

      </Fragment>
    )
  }
}
