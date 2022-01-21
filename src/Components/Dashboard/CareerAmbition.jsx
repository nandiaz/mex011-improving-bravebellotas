import React from 'react';
import TextField from '@mui/material/TextField';
import '../Styles/CareerAmbition.css';
import  Button  from '@mui/material/Button';
import  Stack  from '@mui/material/Stack';

export default function CareerAmbition() {
  return (
    <div className='career-ambition'>
      <h1 className='title-career-ambition'>Career Ambition</h1>
      <TextField
          label="I am your goal write me...!"
          id="filled-full-width"
          style={{ margin: 8 }}
          placeholder=""
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
    <Stack spacing={2} direction="row">
      <Button variant="outlined" className='btn-career-ambition'>Edit</Button>
    </Stack>
    </div>


  );
}


