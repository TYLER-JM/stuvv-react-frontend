import React, { useState } from 'react';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

export default function DatePicker() {
  const [selectedDate, setSelectedDate] = useState(new Date('2019-11-18T00:00:00'));

  const hardDates = () => {
    let d = new Date('2019-11-23 19:48:30.82458')
    return d.toLocaleDateString()
  }; 

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const  disableRandomDates = (date) => {
    // return Math.random() > 0.7;
    console.log(date)
    console.log("HARD DATES", hardDates())
    return date.toLocaleDateString() === hardDates();
  };

  function disableWeekends(date) {
    return date.getDay() === 0 || date.getDay() === 6;
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          shouldDisableDate={disableRandomDates}
          // shouldDisableDate={disableWeekends}
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Start Date"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="End Date"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        {/* <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        /> */}
      </Grid>
    </MuiPickersUtilsProvider>
  );
}