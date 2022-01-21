import React from 'react';
import TextField from '@mui/material/TextField';
import '../Styles/CareerAmbition.css';
import  Button  from '@mui/material/Button';

export default function CareerAmbition() {
  return (
    <div className='career-ambition'>
      <TextField
          label="Career Ambition"
          id="filled-full-width"
          style={{ margin: 8 }}
          placeholder=""
          helperText="I am your goal write me...!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
    
      <Button>Edit</Button>
    </div>


  );
}


