import React from "react";

const style = {
  backgroundColor: "#51AB97",
  color: "#4f4f4f",
  fontWeigth: "bold",
  height: "70px",
  width: "100%",
  fontAlign: "center",
  margin: 0,
  marginTop: "50px",
  paddingTop: "25px",
  textAlign: "center",
}

const aStyle = {
  color: "#4f4f4f"
}

export default function Footer() {
  return (
    <div>
      <footer style={style}>
        &copy; {new Date().getFullYear()} Copyright:
        <a href="https://github.com/JOadelic" style={aStyle}> Jordan Owens </a> *
        <a href="https://github.com/tlowande" style={aStyle}> Tamires Lowande </a> *
        <a href="https://github.com/TYLER-JM" style={aStyle}> Tyler Martin </a>
      </footer>
    </div >
  )
}