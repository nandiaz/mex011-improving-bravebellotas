/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { Button } from '@mui/material';
import { Link } from "react-router-dom";
import "../../../Styles/Calendar.css"

import isWeekend from 'date-fns/isWeekend';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import Container from '@mui/material/Container';




export default function Calendar() {

 const [value, setValue] = useState([new Date()]);

  //const [value, setValue] = useState[new Date()];
  return (<div className='calendarInfo'>
    <Container  >
    <LocalizationProvider dateAdapter={AdapterDateFns} >
      <StaticDatePicker
        
        openTo="day"
        value={value}
        shouldDisableDate={isWeekend}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
        size="small"
        
      />
    </LocalizationProvider>
    </Container>
    <br></br>
    <>
          <Button className='btn-see'fullWidth size="large" variant="contained" component={Link} to= './calendarInfo' color='secondary'>
            See all
          </Button>
          </>  

    </div>);
}
