import React, { useState } from "react";
// import Video from './video.mp4'
// import Sample from './sample.MOV'
import Sample from './Bike.mp4'
// import axios from "axios";





export default function WelcomeVideo(props) {

  const [search, setSearch] = useState("");


  return (
    <div>
      <header className="v-header container">
        <div className="fullscreen-video-wrap">
          <video src={Sample} autoPlay loop></video>
        </div>
        <div className="header-overlay"></div>
        <div className="header-content">
          <h1><b>Stuvv</b></h1>
          <p>Stuvv allows you to rent your personal belonings</p>
          <form className="form-inline my-2 my-lg-0" onSubmit={event => event.preventDefault()}>
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={e => setSearch(e.target.value)}
            >
            </input>
            <button className="btn btn-light my-2 my-sm-0" type="submit" onClick={() => props.sendRequest(search)}>Search</button>
          </form>
        </div>


      </header>
    </div>
  )
}