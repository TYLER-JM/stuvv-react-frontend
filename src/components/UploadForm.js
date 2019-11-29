import React, { useState, useEffect } from 'react'
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import SavingModal from './SavingModal'


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

export default function Form(props) {
  const classes = useStyles();

  const [modalShow, setModalShow] = React.useState(false);

  //handles the check/uncheck value of the Switch (Availability)
  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  //handles the value of the multiline textarea (description)
  const handleValueChange = event => {
    setValue(event.target.value);
  };

  //handle the dollar amount from the amount input
  const handleAmount = event => {
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
  // if (props.buildState.description) {
  //   setValue(props.buildState.description)
  // }

  //state to handle the upload images and title text field
  const [text, setText] = useState("");
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);

  // previews users selected images
  const getImageURL = (file) => {
    if (!file) return

    let reader = new FileReader();

    reader.onload = (event) => {
      // document.getElementById("displayImage0").src = event.target.result
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
    // console.log(images[0].name)

    for (let img of images) {
      data.append("pics[]", img, img.name)
    }
    data.append("title", text);
    data.append("user_id", props.user.id);
    //adding the description to the data sent out
    data.append("description", value)
    data.append("availability", state.checkedA)
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
            value={text || props.buildState.title}
            onChange={event => setText(event.target.value)}
          />
          <TextField
            id="outlined-multiline-static"
            label="description"
            multiline
            rows="4"
            // defaultValue="Default Value"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            placeholder="enter description"
            // value={value}
            value={ value || props.buildState.description}
            onChange={handleValueChange}
          />
          <FormControl fullWidth className={classes.margin} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-amount">Cost/Day</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              type="number"
              value={amount ||props.buildState.price}
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
                setImages((prev) => [...prev, ...event.target.files])
                // setImages(event.target.files)
              }}
            />
            <label htmlFor="outlined-button-file">
              <Button variant="outlined" component="span">
                {props.buildState.title ? "Add More Images" : "Add Images"}
              </Button>
            </label>
            <div>
              {imageURLs.map(URL => (<img src={URL} className="img" key={URL} alt="preview" />))}
              {/* <img id={"displayImage2"} className="img"/> */}
            </div>
          </div>
          <div className="submit">
            <div aria-label="position" row>
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
            </div>
            <Button
              variant="outlined"
              onClick={() => {
                sendRequest()
                setModalShow(true)
              }}>
                {props.buildState.title ? "Submit Changes" : "Submit"}
           </Button>

            <SavingModal
              show={modalShow}
              onHide={() => setModalShow(false)}
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
}















