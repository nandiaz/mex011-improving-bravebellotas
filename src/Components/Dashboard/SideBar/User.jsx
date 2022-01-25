import { Avatar } from '@mui/material';
import '../../Styles/User.css';
import { authUser } from '../../../Firebase/CurrentUser'
import ImgProfile from '../../../assets/img-profile.jpg'


export default function User() {
  const currentUser = authUser();
  
  return ( <div className='infoUser'>
    
    <Avatar className= "avatar" alt="A" sx={{ width: 150, height: 150}} src={ImgProfile} />
    <h2 className='infoUser'>{currentUser?.name}</h2>
    <p className='infoUser'>{currentUser?.email}</p>
    
    
    </div>);
}

