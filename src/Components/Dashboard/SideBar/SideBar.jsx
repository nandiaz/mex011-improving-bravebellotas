import User from "./User";
import Calendar from "./Calendar/Calendar";
import '../../Styles/User.css';


export default function SideBar() {
    return (
      <div className = "sideBar" >
        <User />
        <Calendar />
      </div>
    );
}
