import React, { useState } from 'react'
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import './UploadFormHideInput.scss'




const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
    },  
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
    input: {
      display: 'none',
    },
  },
}));

export default function Form() {

  const classes = useStyles();

  
  //handles the check/uncheck value of the Switch (Availability)
  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  //handles the value of the multiline textarea (description)
  const handleValueChange = event => {
    setValue(event.target.value);
  };

  //handle the dollar amount from the amount input
  const handleAmount =  event => {
    setAmount(event.target.value);
  };

  // state for the Amount input
  const [amount, setAmount] = useState(0)

  //state for the Switch (Availability)
  const [state, setState] = useState({
    checkedA: true,
    checkedB: true,
  });

  //state for the textarea
  const [value, setValue] = useState("");

  //state to handle the upload images and title text field
  const [text, setText] = useState("");
  const [images, setImages] = useState([]);


  const sendRequest = () => {
    const data = new FormData();
    // console.log(images[0].name)

    for (let img of images) {
      data.append("pics[]", img, img.name)
    }
    data.append("title", text);
    data.append("user_id", 4);
    //adding the description to the data sent out
    data.append("description", value)
    data.append("availability", state.checkedA)
    data.append("price_per_day", amount)

    return axios.post(`http://localhost:3000/listings`, data, {withCredentials: true}).then(resp => console.log("got to the then")).catch(error => console.error())
  }

  return (
    <form 
      onSubmit={event => event.preventDefault()}
      className={classes.root} noValidate autoComplete="off"
    >
      <h1>THE FORM</h1>

        <FormControl component="fieldset">
        <FormGroup aria-label="position" row>
          <FormControlLabel
            value="end"
            control={<Switch
                color="primary"
                checked={state.checkedA}
                onChange={handleChange('checkedA')}
                value="checkedA"
              />}
            label="Available?"
            labelPlacement="start"
          />
        </FormGroup>
        <TextField
          id="outlined-basic"
          label="Title"
          variant="outlined"
          onChange={event => setText(event.target.value)}
        />
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows="4"
          // defaultValue="Default Value"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          placeholder="enter description"
          value={value}
          onChange={handleValueChange}
        />
        <FormControl fullWidth className={classes.margin} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-amount">Cost/Day</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          type="number"
          value={amount}
          onChange={handleAmount}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
          labelWidth={60}
        />
        </FormControl>
          
        <div className={classes.root}>
          <input
            accept="image/*"
            className={classes.input}
            id="outlined-button-file"
            multiple
            type="file"
            onChange={event => {
              setImages(event.target.files)
            }}
          />
          <label htmlFor="outlined-button-file">
            <Button variant="outlined" component="span">
              Upload
            </Button>
          </label>
        </div>
        <Button variant="outlined" onClick={() => sendRequest()}>Submit</Button>
      </FormControl>


      {/* <input type="file" onChange={event => {
        setImages(event.target.files)
      }} multiple /> */}

      {/* <button onClick={() => sendRequest()}> submit</button> */}
    </form >
  );
}