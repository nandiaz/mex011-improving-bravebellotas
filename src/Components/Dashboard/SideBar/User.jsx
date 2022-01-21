import { Avatar } from '@mui/material';
import '../../Styles/User.css';



export default function User() {
  
  return (<div className='sideBarInfo'>
    
    <Avatar className= "avatar" alt="A" sx={{ width: 180, height: 180 }}/>
    <h2 className='infoUser'>Yanet Morales</h2>
    <p className='infoUser'>yanet.morales@improving.com</p>
    
    </div>);
}
