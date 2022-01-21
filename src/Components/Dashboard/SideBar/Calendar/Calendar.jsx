/* eslint-disable jsx-a11y/alt-text */
import { Button } from '@mui/material';
import "../../../Styles/Calendar.css"



export default function Calendar() {
  
  return (<div className='calendarInfo'>
    <img className="calendar" src={process.env.PUBLIC_URL + '/calendar.png'}/>
    <br></br>
          <Button fullWidth size="large" variant="contained" >
            See all
          </Button>
        

    </div>);
}
