import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import DatePicker from './DatePicker';
import axios from 'axios';
import SavingModal from '../SavingModal'


// used by the textfield
const useStyles = makeStyles(theme => ({
  root: {
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    }
  },
}));

// used by the calender component
// const initialState = {
//   startDate: null,
//   endDate: null,
//   focusedInput: null
// };
// function reducer(state, action) {
//   switch (action.type) {
//     case "focusChange":
//       return { ...state, focusedInput: action.payload };
//     case "dateChange":
//       return action.payload;
//     default:
//       throw new Error();
//   }
// }

export default function RequestForm(props) {
  const [modalShow, setModalShow] = useState(false);

  const classes = useStyles();
  const [message, setMessage] = useState("")
  const [selectedStartDate, setSelectedStartDate] = useState(new Date('2019-11-18T00:00:00'));
  const [selectedEndDate, setSelectedEndDate] = useState(new Date('2019-11-18T00:00:00'));
  // const [state, dispatch] = useReducer(reducer, initialState);

  const sendRequest = () => {
    const data = {
      listing_id: props.listingid,
      user_id: props.user.id,
      start_date: selectedStartDate,
      end_date: selectedEndDate
    }

    axios.post("http://localhost:3000/requests", data, { withCredentials: true })
      .then(resp => {
        console.log("RESPONSE IS: ", resp)
        sendQuestion();
        
        setTimeout(() => {
          window.location.pathname = "/"
        }, 500)
      })
      .catch(error => console.log("error is: ", error))
    console.log("DATA TO SEND ALONG: ", data)
  };

  const sendQuestion = () => {
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
    axios.post("http://localhost:3000/messages", { message: fullMessage }, { withCredentials: true })
      .then(resp => {
        console.log("RESPONSE FROM Send QUESTION: ", resp)
      })
      .catch(err => console.log("error: ", err))
    // console.log("message is: ", message)
    // console.log("listingowner: ", props.listingowner)
  }

  //handles the value of the multiline textarea (description)
  const handleMessageChange = event => {
    setMessage(event.target.value);
  };

  return (
    <div className="request-box">
      <DatePicker
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
        // defaultValue="Default Value"
        className={classes.textField}
        margin="normal"
        variant="outlined"
        placeholder="enter description"
        value={message}
        onChange={handleMessageChange}
      />
      </div>
      <div>
        <button onClick={() => sendQuestion()}>Send a message</button>
        <button onClick={() => {
            sendRequest()
            // setModalShow(true)
          }}>Request to book</button>
      </div>

      <SavingModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

    </div>
  );
};