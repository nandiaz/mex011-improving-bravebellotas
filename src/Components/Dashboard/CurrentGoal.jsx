import React from 'react';
import TextField from '@mui/material/TextField';
import '../Styles/CurrentGoal.css';



export default function CurrentGoal() {
  return (
    <div className='current-goal'>
      <TextField
          label="Career Ambition"
          id="filled-full-width"
          style={{ margin: 8 }}
          placeholder="Aprender a crecer a cada paso!"
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
