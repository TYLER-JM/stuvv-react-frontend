import React, { useState } from 'react'
import axios from "axios";
import './RegisterForm.scss'
// import Alert from 'react-bootstrap/Alert'


export default function RegisterForm() {

  const [css, setCss] = useState("container");
  const [user, setUser] = useState({});
  const [session, setSession] = useState({});

  const sendRequestRegister = () => {
    return axios.post(`http://localhost:3000/users`, { user }, { withCredentials: true })
      .then(resp => {
        console.log("got to the register")
        window.location.pathname = "/"
      })
      .catch(error => {
        alert("Please try again")
        console.log(error.response.request.response)
      })
  }

  const sendRequestLogin = () => {

    return axios.post(`http://localhost:3000/sessions`, { session }, { withCredentials: true }
    )
      .then(resp => {
        console.log("got to the login");
        window.location.pathname = "/"
      })
      .catch(error => {
        alert("Please try again")
        console.log(error.response)
      })
  }


  return (
    <div className={css} id="container">
      <div className="form-container sign-up-container">
        <form onSubmit={event => event.preventDefault()}>
          <h1>Create Account</h1>
          <br />
          <input
            type="text"
            placeholder="Fisrt Name"
            onChange={e => setUser({ first_name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Last Name"
            onChange={e => setUser({ ...user, last_name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            onChange={e => setUser({ ...user, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={e => setUser({ ...user, password: e.target.value })}
          />
          <button onClick={() => sendRequestRegister()}>Sign Up</button>
        </form>
      </div>
      {/* ----------------------------------- */}
      <div className="form-container sign-in-container">
        <form onSubmit={event => event.preventDefault()}>
          <h1>Sign in</h1>
          <br />
          <input
            type="email"
            placeholder="Email"
            onChange={e => setSession({ email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={e => setSession({ ...session, password: e.target.value })}
          />
          <button onClick={() => sendRequestLogin()}>Sign In</button>
        </form>
      </div>
      {/* ----------------------------------- */}
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button className="ghost" id="signIn" onClick={() => setCss("container")}>Sign In</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button className="ghost" id="signUp" onClick={() => setCss(" container right-panel-active")}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  )
}