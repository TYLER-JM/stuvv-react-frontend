import React, { useState } from 'react';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import RequestFormHelper from '../../helpers/RequestFormHelper';

export default function DatePicker(props) {
  const [selectedStartDate, setSelectedStartDate] = useState(new Date('2019-11-18T00:00:00'));
  const [selectedEndDate, setSelectedEndDate] = useState(new Date('2019-11-18T00:00:00'));

  // const hardDates = () => {
  //   let a = new Date('2019-11-20 19:48:30.82458');
  //   let b = new Date('2019-11-24 19:48:30.82458');
  //   let c = new Date('2019-11-12 19:48:30.82458');
  //   let d = new Date('2019-11-17 19:48:30.82458');
  //   return [
  //     {"start_date": a.toLocaleDateString(), "end_date": b.toLocaleDateString()},
  //     {"start_date": c.toLocaleDateString(), "end_date": d.toLocaleDateString()},
  //   ]
  // }; 

  const requestedDates = RequestFormHelper(props.listingId);

  const handleStartDateChange = date => {
    setSelectedStartDate(date);
  };
  const handleEndDateChange = date => {
    setSelectedEndDate(date);
  };

  const  disableDates = (date) => {

    for (let req of requestedDates) {
      const reqStartDate = new Date(req.start_date)
      const reqEndDate = new Date(req.end_date)
      if (date.getTime() >= reqStartDate.getTime() && date.getTime() <= reqEndDate.getTime()) {
        return true
      } 
    }
  };

  const disableEndDates = (date) => {
    let startDate = new Date(selectedStartDate)
    if (date.getTime() < startDate.getTime()) {
      return true
    }
    for (let req of requestedDates) {
      let reqStartDate = new Date(req.start_date)
      if (date.getTime() >= reqStartDate.getTime() && startDate.getTime() <= reqStartDate.getTime()) {
        return true
      }
    }


    // for (let req of requestedDates) {
    //   const startDateString = new Date(req.start_date)
    //   const endDateString = new Date(req.end_date)
    //   // if (dateString >= startDateString.toLocaleDateString() && dateString <= endDateString.toLocaleDateString()) {
    //   if (date.getTime() >= startDateString.getTime() && date.getTime() <= endDateString.getTime()) {
    //     return true
    //   } 
    // }
  };

  // function disableWeekends(date) {
  //   return date.getDay() === 0 || date.getDay() === 6;
  // }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          shouldDisableDate={disableDates}
          autoOk={true}
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Start Date"
          value={selectedStartDate}
          onChange={handleStartDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardDatePicker
          shouldDisableDate={disableEndDates}
          autoOk={true}
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="End Date"
          value={selectedEndDate}
          onChange={handleEndDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}