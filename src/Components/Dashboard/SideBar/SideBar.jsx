import User from "./User";
import CalendarInfo from "./Calendar/Calendar";
import '../../Styles/User.css';
import Drawer from '@mui/material/Drawer';
import { BttnLogout } from "./BttnLogout";

const drawerWidth = 300;

export default function SideBar() {
    return (
      <Drawer 
         sx={{
          width: drawerWidth,
          flexShrink: 0,
          
          
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            bgcolor: '#001E52',
            alignItems: 'center',
            justifyItems: 'center'
            },
        }}
        variant="permanent"
        anchor="left"
        
      >
        <div className="btn-logout">
        <BttnLogout/>
        </div>
        <User />
        <CalendarInfo />
        
      </Drawer>
      
    
      
    );
}
