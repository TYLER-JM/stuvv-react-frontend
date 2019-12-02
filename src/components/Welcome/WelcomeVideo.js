import React, { useState } from "react";
// import Video from './video.mp4'
// import Sample from './sample.MOV'
import Sample from './stuvvWelcomeVideo.mov';
import "./Welcome.scss"
// import axios from "axios";
import CachedIcon from '@material-ui/icons/Cached';





export default function WelcomeVideo(props) {

  const [search, setSearch] = useState("");
  console.log("THIS IS SEARCH===", search)

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
              value={search}
            >
            </input>
            <button className="btn btn-light my-2 my-sm-0" type="submit" onClick={() => props.sendRequest(search)}>Search</button>
            {/* <button className="btn btn-light my-2 my-sm-0" type="submit" onClick={() => window.location.reload(false)}>Refresh</button> */}
            <button 
              className="btn btn-light my-2 my-sm-0" 
              type="submit" 
              onClick={() => {
                props.sendRequest()
                setSearch("")
              }}>
                <CachedIcon/>
            </button>
          </form>
        </div>


      </header>
    </div>
  )
}