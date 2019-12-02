import React, { useState, useEffect } from 'react'
import axios from "axios";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';

import Slider from '@material-ui/core/Slider';

import SavingModal from './SavingModal'
import Register from './Login/RegisterModal';
import { validate } from '@babel/types';


const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: "1rem auto",
      width: "60%",
      display: "flex",
      "justify-content": "center",
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      "background-color": "yellow",
    },
    margin: {
      margin: "none",
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

const PrettoSlider = withStyles({
  root: {
    color: '#52af77',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus,&:hover,&$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

export default function Form(props) {

  const classes = useStyles();

  const [modalShow, setModalShow] = React.useState(false);

  //handles the check/uncheck value of the Switch (Availability)
  const handleChange = event => {
    setState(event.target.checked);
  };

  //handles the value of the multiline textarea (description)
  const handleValueChange = event => {
    setValue(event.target.value);
  };

  //handle the dollar amount from the amount input
  const handleAmount = event => {
    setAmount(event.target.value);
  };

  // const validate = () => {
  //   amount.includes()
  // }

  // state for the Amount input
  // const [amount, setAmount] = useState(0)
  const [amount, setAmount] = useState(props.buildState.price || 0)

  //state for the Switch (Availability)
  const [state, setState] = useState(
    props.buildState.availability
  );

  //state for the textarea
  // const [value, setValue] = useState("");
  const [value, setValue] = useState(props.buildState.description || "");

  //state to handle the upload images and title text field
  // const [text, setText] = useState("");
  const [text, setText] = useState(props.buildState.title || "");
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);

  const getImageURL = (file) => {
    if (!file) return

    let reader = new FileReader();

    reader.onload = (event) => {
      setImageURLs((URLs) => [...URLs, event.target.result])
    }
    reader.readAsDataURL(file)
  }


  useEffect(() => {
    setImageURLs([])
    images.forEach(getImageURL);
  }, [images])

  const sendRequest = () => {
    const data = new FormData();

    for (let img of images) {
      data.append("pics[]", img, img.name)
    }
    data.append("title", text);
    data.append("user_id", props.user.id);
    data.append("description", value)
    data.append("availability", state)
    data.append("price_per_day", amount)

    if (!props.buildState.id) {
      return axios.post(`http://localhost:3000/listings`, data, { withCredentials: true })
        .then(resp => {
          console.log("got to the then")
          setTimeout(() => {
            window.location.pathname = "/my_stuvv"
          }, 1000)
        })
        .catch(error => console.error())
    } else {
      return axios.put(`http://localhost:3000/listings/${props.buildState.id}`, data, { withCredentials: true })
        .then(resp => {
          console.log("got to the then")
          setTimeout(() => {
            window.location.pathname = "/my_stuvv"
          }, 1000)
        })
        .catch(error => console.error())
    }
  }
  console.log("found buildState ", props.buildState)
  if (props.user.id) {
    return (
      <div className="test">
        <form
          onSubmit={event => event.preventDefault()}
          className={classes.root} noValidate autoComplete="off"
        >
          <FormControl className="form-control" component="fieldset">
            <TextField
              id="outlined-basic"
              label="title"
              variant="outlined"
              value={text}
              onChange={event => setText(event.target.value)}
            />
            <TextField
              id="outlined-multiline-static"
              label="description"
              multiline
              rows="4"
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
                inputProps={{ step: 1, type: "number" }}
                value={amount}
                onkeypress="return event.charCode >= 48 && event.charCode <= 57"
                onChange={handleAmount}
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                labelWidth={60}
                // type="number"
                required
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
                  setImages((prev) => [...prev, ...event.target.files])
                }}
              />
              <label htmlFor="outlined-button-file">
                <Button variant="outlined" component="span">
                  {props.buildState.id ? "Add More Images" : "Add Images"}
                </Button>
              </label>
              <div>
                {imageURLs.map(URL => (<img src={URL} className="img" key={URL} alt="preview" />))}
              </div>
            </div>
            <div className="submit">
              <div aria-label="position" row>
                <FormControlLabel
                  value="end"
                  control={<Switch
                    color="primary"
                    checked={state}
                    onChange={e => handleChange(e)}
                    value={state}
                  />}
                  label="Available?"
                  labelPlacement="start"
                />
              </div>
              <Button
                variant="outlined"
                onClick={() => {
                  // validate()
                  sendRequest()
                  setModalShow(true)
                }}>
                {props.buildState.id ? "Submit Changes" : "Submit"}
              </Button>
              {props.buildState.id ?
                <Button
                  className="nevermind"
                  variant="secondary"
                  onClick={() => {
                    window.location.pathname = "/my_stuvv"
                  }}>
                  Nevermind
                </Button> : null}

              <SavingModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                line="Posting your Stuvv!"
              />
            </div>
          </FormControl>

          {/* <input type="file" onChange={event => {
          setImages(event.target.files)
        }} multiple /> */}

          {/* <button onClick={() => sendRequest()}> submit</button> */}
        </form >
      </div>
    );
  } else {
    return (<Register show="true" onHide={() => window.location.pathname = "/"} />)

  }
}















