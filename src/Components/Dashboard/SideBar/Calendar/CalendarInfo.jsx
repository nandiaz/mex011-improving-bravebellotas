import SideBar from "../SideBar";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import "react-big-calendar/lib/css/react-big-calendar.css";
import CalendarHead from "./CalendarHead";

const localizer = momentLocalizer(moment);

export default function CalendarHeader() {
  return (<div className="bigCalendar-container">
    <SideBar></SideBar>
    {/* <Calendar
      localizer={localizer}
      startAccessor="start"
      endAccessor="end"
      showMultiDayTimes
      style={{ height: 600, width: 800, alignContent:'flex-end' }}
    /> */}
  </div>);
}
