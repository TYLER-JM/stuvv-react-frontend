import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

// import { DateRangeInput } from "@datepicker-react/styled";
import DatePicker from './DatePicker';


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

export default function RequestForm() {
  const classes = useStyles();
  const [message, setMessage] = useState("")
  // const [state, dispatch] = useReducer(reducer, initialState);


  //handles the value of the multiline textarea (description)
  const handleMessageChange = event => {
    setMessage(event.target.value);
  };

  return (
    <div>
      <DatePicker userId={1} />
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
  );
};