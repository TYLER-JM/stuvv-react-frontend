import React from "react";
import Button from 'react-bootstrap/Button'
import Shoe from './shoe.jpg'



export default function Jumbotron() {
  return (
    <Jumbotron>
  <h1>Hello, world!</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
  <p>
    <Button variant="primary">Learn more</Button>
  </p>
</Jumbotron>
  )
}