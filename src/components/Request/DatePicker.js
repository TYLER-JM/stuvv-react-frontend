import React from 'react';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import RequestFormHelper from '../../helpers/RequestFormHelper';
import "./ListingModal.scss"

export default function DatePicker({ listingid, selectedStartDate, setSelectedStartDate, selectedEndDate, setSelectedEndDate }) {
  
  const requestedDates = RequestFormHelper(listingid);

  const handleStartDateChange = date => {
    setSelectedStartDate(date);
  };
  const handleEndDateChange = date => {
    setSelectedEndDate(date);
  };

  const disableDates = (date) => {
    if (date.getTime() < Date.now()) {
      return true;
    }
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
    if (date.getTime() < startDate.getTime() || date.getTime() < Date.now()) {
      return true
    }
    for (let req of requestedDates) {
      let reqStartDate = new Date(req.start_date)
      if (date.getTime() >= reqStartDate.getTime() && startDate.getTime() <= reqStartDate.getTime()) {
        return true
      }
    }
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          className="calendar-button"
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
        className="calendar-button"
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