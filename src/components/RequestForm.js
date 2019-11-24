import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles(theme => ({
  root: { 
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    }
  },
}));

export default function RequestForm() {
  const classes = useStyles();
  const [message, setMessage] = useState("")

   //handles the value of the multiline textarea (description)
   const handleMessageChange = event => {
    setMessage(event.target.value);
  };

  return (
    <div>
      <h1>REQUEST FORM</h1>
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