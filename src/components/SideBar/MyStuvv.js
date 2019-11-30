import React from 'react'
import CardList from "../CardList.js"
import './MyStuvv.scss'
import Register from '../Login/RegisterModal';
import SavingModal from '../SavingModal'


export default function MyStuvv(props) {

  console.log("from mystuvv.js", props.user)

  // setTimeout(() => {
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
    return (<Register show="true" onHide={() => window.location.pathname = "/"} />)
    // return (<SavingModal
    //   show="true"
    //   onHide={() => window.location.pathname = "/"}
    // />)

  }
  // }, 400)

}