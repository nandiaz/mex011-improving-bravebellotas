import { Avatar } from '@mui/material';
import '../../Styles/User.css';
import { authUser } from '../../../Firebase/CurrentUser'



export default function User() {
  const currentUser = authUser();
  
  return ( <div className='infoUser'>
    
    <Avatar className= "avatar" alt="A" sx={{ width: 180, height: 180}}/>
    <h2 className='infoUser'>{currentUser?.name}</h2>
    <p className='infoUser'>{currentUser?.email}</p>
    
    </div>);
}

