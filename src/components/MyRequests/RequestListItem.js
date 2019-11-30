import React from "react";
import './Myrequests.scss'

export default function RequestListItem(props) {
  return (
    <tr>
      <td>BTN</td>
      <td>pending...</td>
      <td>{props.title} id: {props.listingid}</td>
      {/* <td><div className="request-description">{props.description}</div></td> */}
      <td>${Math.round(props.price)}</td>
      <td>{props.start_date}</td>
      <td>{props.end_date}</td>
      <td>{props.owner}</td>
    </tr>
  );
}