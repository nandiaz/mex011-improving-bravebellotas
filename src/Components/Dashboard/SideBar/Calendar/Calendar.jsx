/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { Button } from '@mui/material';
import { Link } from "react-router-dom";
import "../../../Styles/Calendar.css"


import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';




export default function CalendarInfo() {

  const [dateState, setDateState] = useState([new Date()])
  const changeDate = (e) => {
    setDateState(e)
  }
  //const [value, setValue] = useState[new Date()];
  return (<div className="calendar-info">
    
    <div className="calendar-mini">

    <Calendar value={dateState} onChange={changeDate} locale="en-En"/>
   
    </div>
  
  
    <div className="btn-see">
          <Button  size="large" variant="contained" component={Link} to= './calendarInfo' color='secondary' sx={{ml: 100, mt: 100}}>
            See all
          </Button>
    </div> 

    </div>);
}
