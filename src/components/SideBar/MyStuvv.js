import React, { Fragment, useState } from 'react'
import CardList from "../CardList.js"
import './MyStuvv.scss'
import Register from '../Login/RegisterModal';
import SavingModal from '../SavingModal'




export default function MyStuvv(props) {

  const [loading, setLoading] = useState(true)
  const [inAsec, setInAsec] = useState(false)

  setTimeout(() => {
    setLoading(false)
    setInAsec(true)
  }, 500)


  if (props.user.id) {
    return (
      <div className="myStuvv">
        <div className="banner">
          My Stuvv
        </div>
        <CardList cardsData={props.list} user={props.user} setBuildState={props.setBuildState} setList={props.setList} />
      </div>
    )
  } else {
    return (
      <Fragment>

        <SavingModal
          show={loading}
          onHide={() => window.location.pathname = "/"}
        />
        <Register show={inAsec} onHide={() => window.location.pathname = "/"} />

      </Fragment>
    )
  }
}