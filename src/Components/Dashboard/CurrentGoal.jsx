import React from 'react';
import TextField from '@mui/material/TextField';
import '../Styles/CurrentGoal.css';

//import '../../Styles/CommitmentsTable.css';



export default function CurrentGoal() {
  return (
    <div className='current-goal'>
       <h2 className='title-current-goal'>Current Goal</h2>
      <TextField
          id="filled-full-width"
          style={{ margin: 8 }}
          placeholder="Learn to create and iterate at each step..."
          helperText=""
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
    </div>
  
  );
}
