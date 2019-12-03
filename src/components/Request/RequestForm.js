import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import DatePicker from './DatePicker';
import axios from 'axios';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import Spinner from 'react-bootstrap/Spinner'
import './ListingModal.scss'


const useStyles = makeStyles(theme => ({
  root: {
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    }
  },
}));


export default function RequestForm(props) {
  // const [modalShow, setModalShow] = useState(false);

  const classes = useStyles();
  const [message, setMessage] = useState("")
  const [selectedStartDate, setSelectedStartDate] = useState(new Date);
  const [selectedEndDate, setSelectedEndDate] = useState(new Date);

  const sendQuestionAndRequest = () => {
    const toBeStringified = [
      {
        sender: props.user.first_name,
        content: message,
        sent: new Date()
      }
    ]
    const fullMessage = {
      conversation: JSON.stringify(toBeStringified),
      from_user_id: props.user.id,
      to_user_id: props.listingowner
    }
    let request = {
      listing_id: props.listingid,
      user_id: props.user.id,
      start_date: selectedStartDate,
      end_date: selectedEndDate,
      message_id: null
    }

    axios.post("http://localhost:3000/messages", { message: fullMessage }, { withCredentials: true })
      .then(resp => {
        request.message_id = resp.data.id
        console.log("RESPONSE FROM Send QUESTION: ", resp.data)
        axios.post("http://localhost:3000/requests", request, { withCredentials: true })
          .then(resp => {
            console.log("request that was sent: ", request)
            console.log("saved request after message...", resp)

            setTimeout(() => {
              window.location.pathname = "/"
            }, 500)
          })
          .catch(err => console.log("error: ", err))

      })
      .catch(err => console.log("error: ", err))
  }

  //handles the value of the multiline textarea (description)
  const handleMessageChange = event => {
    setMessage(event.target.value);
  };

  const popover = (
    <Popover className="popover-header">
      <Popover.Title as="h3">Requesting your booking!</Popover.Title>
      <Popover.Content>
        <Spinner animation="border" variant="warning" />
      </Popover.Content>
    </Popover>
  );

  return (
    <div className="request-box">
      <DatePicker
      //  className="calendar-button"
        listingid={props.listingid}
        selectedStartDate={selectedStartDate}
        setSelectedStartDate={setSelectedStartDate}
        selectedEndDate={selectedEndDate}
        setSelectedEndDate={setSelectedEndDate}
      />
      <div className="message-box">
        <TextField
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows="4"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          placeholder="enter description"
          value={message}
          onChange={handleMessageChange}
        />
      </div>
      <div className="request-button-div">
        <OverlayTrigger trigger="click" placement="right" overlay={popover} className="popover-body">
          <button onClick={() => {
            setTimeout(() => {
              sendQuestionAndRequest()
            }, 500)
            // setModalShow(true)
          }}>Request to book</button>
        </OverlayTrigger>
      </div>
    </div>
  );
};