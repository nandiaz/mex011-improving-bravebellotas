/* eslint-disable jsx-a11y/alt-text */
import { Button } from '@mui/material';
import "../../../Styles/Calendar.css"

export default function Calendar() {
  return (<div>
    <img className="calendar" src={process.env.PUBLIC_URL + '/calendar.png'}/>
    <Button className="btn-seeAll" variant="contained" size= "small" >See all</Button>

    </div>);
}
