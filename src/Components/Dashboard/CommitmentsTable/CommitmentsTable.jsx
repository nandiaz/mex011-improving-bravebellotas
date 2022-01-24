import React, { useState, useEffect } from 'react';
import { Table, TableContainer, TableHead, TableCell, TableRow, TableBody, Container } from '@material-ui/core';
import Button from '@mui/material/Button';
import '../../Styles/CommitmentsTable.css';
import ProgressBar from '../CommitmentsTable/ProgressBar';


export default function CommitmentsTable() {
  // hook para la data
  const [data, setData] = useState([]);
  
  let url = "http://localhost:5000/Period" // campo "id"
  // let urlOne = "http://localhost:5000/Main-Goal" // campo "name"
  // let urlTwo = "http://localhost:5000/Action-Plan"; // campo "status"


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


//funcion para el boton editar nos lleve a la ruta de tablas
 const editActions = () => {
    console.log('voy para Actions');
  }


  return (
    <div className='container-commitments'>
      <Container>
      <TableContainer>
      <h1 className="title-commitments-table">90-Days commitments</h1>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Periodo</TableCell>
              <TableCell>Main Goal</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              <TableRow >
              <TableCell>Q4</TableCell>
              <TableCell>Aprender perticiones, helpers y CORS <br/> <br/><ProgressBar/></TableCell>
              <TableCell>status</TableCell>
              <TableCell><Button variant="contained" color="secondary" className='btn-edit-actions' onClick={editActions}>Editar</Button></TableCell>
              </TableRow>
          </TableBody>
          <TableBody>
              <TableRow >
              <TableCell>Q3</TableCell>
              <TableCell>Aprender React <br/> <br/><ProgressBar/></TableCell>
              <TableCell>status</TableCell>
              <TableCell><Button variant="contained" color="secondary" className='btn-edit-actions'>Editar</Button></TableCell>
              </TableRow>
          </TableBody>
          <TableBody>
              <TableRow >
              <TableCell>Q2</TableCell>
              <TableCell>Aprender import y modularizacion <br/> <br/><ProgressBar/></TableCell>
              <TableCell>status</TableCell>
              <TableCell><Button variant="contained" color="secondary" className='btn-edit-actions'>Editar</Button></TableCell>
              </TableRow>
          </TableBody>
          <TableBody>
              <TableRow >
              <TableCell>Q1</TableCell>
              <TableCell>Aprender manejo de DB <br/> <br/><ProgressBar/></TableCell>
              <TableCell>status</TableCell>
              <TableCell><Button variant="contained" color="secondary" className='btn-edit-actions'>Editar</Button></TableCell>
              </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
    </div>
    
  );
}
