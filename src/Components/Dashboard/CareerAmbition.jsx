import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import '../Styles/CareerAmbition.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

//importar la base de datos
//import {db} from "firebase-config.js"


//pasar el parametropara hacer visible el career
export default function CareerAmbition() {
  //  const [data, setData] = useState({
  //    nombre:'',
  //  });
  const [myValueCareer, setMyValueCareer] = useState('');

  const cleanText = () => {
    setMyValueCareer('');
  }

  // let url = "http://localhost:5000/Career-Ambitions";
  // const fetchApi = async () => {
  //   const response =await fetch(url)
  //   console.log(response.status)
  //   const responseJSON= await response.json();
  //   setData(responseJSON)
  //   console.log(responseJSON)
  // }

  // useEffect (() => {
  //   fetchApi()
  // }, [])

  //   const handleChange = (event) => {
  //     console.log('good check!!!');
  //     setData({
  //       ...data,
  //       [event.target.name]: event.target.value
  //     })
  //   };

  //  const handleClick = (event) => {
  //   console.log('data reset');
  //   event.target.reset(data);
  //   };

  return (
    <Container maxWidth='lg'>
      <div className='career-ambition'>
        <h1 className='title-career-ambition'>Career Ambition</h1>
        <br />
        {/* <h2>{data.nombre}</h2> */}
        <br />

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
{/* <Box 
        p={1}
        borderRadius={5}
        fontFamily={'Roboto'}
        fontWeight={500}
        bgcolor="#ffe0b2"
        color="#001E52" 
        clone
        textAlign="center"
        >
        { !data ? 'Cargando...' :
          data.map((data, index) => {
            return <li key={index}> {data.name}<br/>{data.description}</li>
          })
        }
        </Box> */}

{/* <TextField
          value={myValue}
          name='nombre'
          fullWidth='1'
            //   value={ !data ? 'Cargando...' :
            //   data.map((data, index) => {
            //     return <li key={index}> {data.name}<br/>{data.description}</li>
            //   })
            // }
            onChange={handleChange}
            />
        <br/>

        <Stack spacing={2} direction="row">
          <Button variant="contained" onClick={handleClick}>
            Editar
          </Button>
        </Stack> */}


