/* eslint-disable jsx-a11y/alt-text */
import { Button } from '@mui/material';
import { Link } from "react-router-dom";
import "../../../Styles/Calendar.css"



export default function Calendar() {
  
  return (<div className='calendarInfo'>
    <img className="calendar-img" src={process.env.PUBLIC_URL + '/calendar.png'}/>
    <br></br>
          <Button fullWidth size="large" variant="contained" component={Link} to= './calendarInfo'>
            See all
          </Button>
        

    </div>);
}
