import React, { useState } from 'react';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import RequestFormHelper from '../../helpers/RequestFormHelper';

export default function DatePicker(props) {
  const [selectedDate, setSelectedDate] = useState(new Date('2019-11-18T00:00:00'));

  const hardDates = () => {
    let a = new Date('2019-11-20 19:48:30.82458');
    let b = new Date('2019-11-24 19:48:30.82458');
    let c = new Date('2019-11-12 19:48:30.82458');
    let d = new Date('2019-11-17 19:48:30.82458');
    return [
      {"start_date": a.toLocaleDateString(), "end_date": b.toLocaleDateString()},
      {"start_date": c.toLocaleDateString(), "end_date": d.toLocaleDateString()},
    ]
  }; 

  const requestedDates = RequestFormHelper();

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const  disableDates = (date) => {
    const dateString = date.toLocaleDateString()
    for (let req of requestedDates) {
      // console.log("startDATE: ", req.start_date)
      if (dateString >= req.start_date && dateString <= req.end_date) {
        return true
      } 
    }
  };

  function disableWeekends(date) {
    return date.getDay() === 0 || date.getDay() === 6;
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          shouldDisableDate={disableDates}
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