import React from "react";
// import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const style = {
  "background-color": "black",
  // opacity: 0.3,
  color: "grey",
  margin: "5px 0",
  "font-weigth": "bold",
  height: "70px",
  width: "100%",
  "font-align": "center",
  position: "absolute",
  "margin-bottom": 0,
  left: 0,
  "text-decoration": "none",
  "padding-top": "25px"
}

export default function Footer() {
  return (
    <div className="footer-copyright text-center py-3">
      <footer style={style}>
        &copy; {new Date().getFullYear()} Copyright:
        <a href="https://github.com/JOadelic"> Jordan Owens </a> *
        <a href="https://github.com/tlowande"> Tamires Lowande </a> *
        <a href="https://github.com/TYLER-JM"> Tyler Martin </a>
      </footer>
    </div>
  )
}