import React from "react";
import Video from './video.mp4'
// import Sample from './sample.MOV'
import Sample from './samplesample.mp4'





export default function WelcomeVideo() {
  return (
    <div>
      <header className="v-header container">
        <div className="fullscreen-video-wrap">
          <video src={Sample} autoPlay loop></video>
        </div>
        <div className="header-overlay"></div>
        <div className="header-content">
          <h1>Hello World</h1>
          <p>Stuvv allows you to rent your personal belonings</p>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button className="btn btn-light my-2 my-sm-0" type="submit">Search</button>
         </form>
        </div>


      </header>
    </div>
  )
}