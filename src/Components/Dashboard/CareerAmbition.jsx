import React, { useState, useEffect } from 'react';
//import TextField from '@mui/material/TextField';
import '../Styles/CareerAmbition.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

//import { useDataContext } from "../../Hooks/json-provider";
//import { helpHttp } from "../../helpers/helpers";

//importar la base de datos
//import {db} from "firebase-config.js"


//pasar el parametropara hacer visible el career
export default function CareerAmbition() {

 //hook para la data
 const [data, setData] = useState([]);
  //let api = helpHttp();
  let url = "http://localhost:5000/Career-Ambitions";


  const fetchApi = async () => {
    const response =await fetch(url)
    console.log(response.status)
    const responseJSON= await response.json();
    setData(responseJSON)
    console.log(responseJSON)
  }

  useEffect (() => {
    fetchApi()
  }, [])
  
   const editAmbition = () => {
    console.log('voy a editar Ambition')

  }

  return (
    <Container maxWidth='lg'>
      <div className='career-ambition'>
        <h1 className='title-career-ambition'>Career Ambition</h1>
        <br/>
        <br/>
        <Box 
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
        </Box>
        <br/>git

        <Stack spacing={2} direction="row">
          <Button variant="contained" onClick={editAmbition}>
            Editar
          </Button>
        </Stack>
      </div>
    </Container>

  );
}