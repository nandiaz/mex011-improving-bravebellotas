import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import '../Styles/CareerAmbition.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';


export default function CareerAmbition() {

  const [myValueCareer, setMyValueCareer] = useState('');

  const cleanText = () => {
    setMyValueCareer('');
  }

  return (
    <Container maxWidth='lg'>
      <div className='career-ambition'>
        <h1 className='title-career-ambition'>Career Ambition</h1>
           
      {/* <h2 className='title-value-career-ambition'>" {myValueCareer} "</h2> */}
      <br/>
      <br/> 
        <TextField
          label="I am your goal write me...!"
          id="filled-full-width"
          name="career"
          style={{ margin: 10 }}
          placeholder=""
          value={myValueCareer}
          onChange={(e) => setMyValueCareer(e.target.value)}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />

        <Stack spacing={2} direction="row">
          <Button variant="contained" onClick={(e) => cleanText(myValueCareer)}>
            Editar
          </Button>
        </Stack>
      </div>
    </Container>

  );
}