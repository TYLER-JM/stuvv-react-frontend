import React, { useState, Fragment } from 'react';
import './Myrequests.scss'
import SavingModal from '../SavingModal'
import Register from '../Login/RegisterModal';
import RequestList from './RequestList';


export default function MyRequests(props) {

  const [loading, setLoading] = useState(true)
  const [register, setRegister] = useState(false)

  setTimeout(() => {
    setLoading(false)
    setRegister(true)
  }, 700)

  if (props.user.id) {
    return (
      <div className="requests">
        <div className="requests-banner">My Requests</div>
        <RequestList requests={props.request} user={props.user} />
      </div>
    )
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