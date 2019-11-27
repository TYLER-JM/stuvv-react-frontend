import React from "react";

const style = {
  "background-color": "#51AB97",
  // opacity: 0.3,
  color: "#4f4f4f",
  "font-weigth": "bold",
  height: "70px",
  width: "100%",
  "font-align": "center",
  position: "absolute",
  margin: 0,
  // left: 0,
  // right: 0,
  "padding-top": "25px"
}

const aStyle = {
  color: "#4f4f4f"
}

export default function Footer() {
  return (
    <div className="footer-copyright text-center py-3">
      <br />
      <br />
      <footer style={style}>
        &copy; {new Date().getFullYear()} Copyright:
        <a href="https://github.com/JOadelic" style={aStyle}> Jordan Owens </a> *
        <a href="https://github.com/tlowande" style={aStyle}> Tamires Lowande </a> *
        <a href="https://github.com/TYLER-JM" style={aStyle}> Tyler Martin </a>
      </footer>
    </div >
  )
}