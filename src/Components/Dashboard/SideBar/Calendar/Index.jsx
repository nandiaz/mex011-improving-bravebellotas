
import React, { useState, useEffect } from 'react';
import moment from 'moment';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CalendarBody from './CalendarBody';
import CalendarHead from './CalendarHead';
import SideBar from '../SideBar';
import { useDataContext } from "../../../../Hooks/json-provider";
import "../../../Styles/Calendar.css"
import { Link } from "react-router-dom";
import { Button } from '@mui/material';
import ActivityList from './ActivityList'


const Calendars = () => {
    let defaultSelectedDay = {
        day: moment().format("D"),
        month: moment().month()
    };

    /*** DATA ***/
    const { data, error } = useDataContext();
    /* const { data, activitiesDay } = useDataContext();
    console.log(data.practiceLog[0].Date)
    console.log(data.practiceLog[0].period) */
    //const [data, setData] = useState([]);
    useEffect(() => {
      if (data && data !== {}) {
       
        console.log(data.practiceLog[0].Date)
      } else if (error) console.log(error);
    }, [data]);

 

  //Fecha desde json
    //console.log(data.practiceLog[0].Date)
    //const newDate = new Date (date);
    // const dayDate = newDate.getDate();
    // const monthDate = newDate.getMonth()+1;
    // const yearDate = newDate.getFullYear();
    // let dataDate = `${dayDate}-${monthDate}-${yearDate}`;

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


    const [activities, setActivities] = useState(true);
    const retrieveData = () => {
        let queryDate = `${selectedDay.day}-${selectedDay.month}-${selectedDay.year}`;
        // if (dataDate === queryDate){
        //   // setActivities(data)
        //   console.log("igual dia")
        // }

    }
    //useEffect(() => retrieveData(), [selectedDay]);


   
  return <div className='calendarInfo'>
     <SideBar></SideBar>

     
      
      <div className='content-calendar'>
        <div>
      <Button size="small" variant="contained"  color='primary' component={Link} to= '/' sx={{  '& ..MuiButton-root': {
            ml: 300
            },}} >Go Back</Button>
        </div>
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
        <Grid item xs={12} md={7}>
                <Paper className="paper-activities">
                <h3>Activities on {selectedDay.day}-{selectedDay.month + 1}</h3>
                <ActivityList
                   
                    activities={activities}
                    
                />
                </Paper>
        </Grid>
        </div>
  </div>;
};

export default Calendars;
