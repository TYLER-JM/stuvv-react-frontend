import React, { useState } from 'react'
import axios from "axios";
import './RegisterForm.scss'


export default function RegisterForm() {

  const [css, setCss] = useState("container");
  const [user, setUser] = useState({});

  const sendRequest = () => {
    // const data = new FormData();
    // data.append("user", user)


    return axios.post(`http://localhost:3000/users`, { user }).then(resp => console.log("got to the then")).catch(error => console.error())
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
          <button onClick={() => sendRequest()}>Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form action="#">
          <h1>Sign in</h1>
          <br />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forgot your password?</a>
          <button >Sign In</button>
        </form>
      </div>
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