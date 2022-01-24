import React, { useState, useEffect } from 'react';
import moment from 'moment';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CalendarBody from './CalendarBody';
import CalendarHead from './CalendarHead';
import SideBar from '../SideBar';
import "../../../Styles/Calendar.css"


const Calendars = () => {
    let defaultSelectedDay = {
        day: moment().format("D"),
        month: moment().month()
    };

    /*** HOOKS ***/
    const [dateObject, setdateObject] = useState(moment());
    const [showMonthTable, setShowMonthTable] = useState(false);
    const [selectedDay, setSelected] = useState(defaultSelectedDay);
    
    /*** CALENDAR HEAD ***/
    const allMonths = moment.months();
    const currentMonth = () => dateObject.format("MMMM");
    const currentYear = () => dateObject.format("YYYY");
    

    const setMonth = month => {
        let monthNo = allMonths.indexOf(month);
        let newDateObject = Object.assign({}, dateObject);
        newDateObject = moment(dateObject).set("month", monthNo);
        setdateObject(newDateObject);
        setShowMonthTable(false);
    }
    
    const toggleMonthSelect = () => setShowMonthTable(!showMonthTable);
    /*** CALENDAR BODY ***/
    const setSelectedDay = day => {
        setSelected({
                day,
                month: currentMonthNum()
        });
        return setSelected; // Later refresh data
    };

    const currentMonthNum = () => dateObject.month();
    const daysInMonth = () => dateObject.daysInMonth();
    const currentDay = () => dateObject.format("D");
    
    const actualMonth = () => moment().format("MMMM");

    const firstDayOfMonth = () => moment(dateObject).startOf("month").format("d");

    const retrieveData = () => {
        let queryDate = `${selectedDay.day}-${selectedDay.month}-${selectedDay.year}`;
        console.log(queryDate)
    }

  return <div className='calendarInfo'>
      <SideBar></SideBar>
      <div className='content-calendar'>
      <Grid item xs={12} md={8} lg={8} >
                    <CalendarHead
                        allMonths={allMonths}
                        currentMonth={currentMonth}
                        currentYear={currentYear}
                        setMonth={setMonth}
                        showMonthTable={showMonthTable}
                        toggleMonthSelect={toggleMonthSelect}
                    />
                    <CalendarBody 
                        firstDayOfMonth={firstDayOfMonth}
                        daysInMonth={daysInMonth}
                        currentDay={currentDay}
                        currentMonth={currentMonth}
                        currentMonthNum={currentMonthNum}
                        actualMonth={actualMonth}
                        setSelectedDay={setSelectedDay}
                        selectedDay={selectedDay}
                        weekdays={moment.weekdays()} 
                        
                    />
        </Grid>
        <Grid item xs={12} md={7} justifyContent='space-between' >
                <Paper className="paper-activities">
                <h3>Activities on {selectedDay.day}-{selectedDay.month + 1}</h3>
                </Paper>
        </Grid>
        </div>
  </div>;
};

export default Calendars;
