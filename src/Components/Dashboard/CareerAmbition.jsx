import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import '../Styles/CareerAmbition.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

import { useDataContext } from "../../Hooks/json-provider";
import { useState, useEffect } from "react";



//importar la base de datos
//import {db} from "firebase-config.js"

//pasar el parametropara hacer visible el career
export default function CareerAmbition() {
 //hook para la data
  const { data, setData } = useDataContext();
   //traer el carrer ambition
  const [career, setCareer]=useState({
    name:"",
    description:""
  })

  useEffect(() => {
    if (data) {
      setCareer(data["name","description"][setData]);
    }
  }, [data]);
  console.log('Estoy en los goals');

  //const {id, career-ambition }= career

  // funcion para traer el CAREER para ser editado
  //const getPost = (id) => db.collection('stories').doc(id).get();

  // funcion para actualizar una tarea
  //const updatePost = (id, updateObject) => db.collection('stories').doc(id).update(updateObject);

  //funcion para editarlo

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

      key={title + description}
      title={title}
      data={description}

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