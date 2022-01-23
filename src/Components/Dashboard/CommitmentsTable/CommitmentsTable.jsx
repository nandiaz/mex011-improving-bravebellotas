import React from 'react';
import { Table, TableContainer, TableHead, TableCell, TableRow, TableBody, Container } from '@material-ui/core';
import Button from '@mui/material/Button';
import '../../Styles/CommitmentsTable.css';
import ProgressBar from '../CommitmentsTable/ProgressBar';

//importar la base de datos
//import {db} from "firebase-config.js"

//pasar los parametros para el periodo, smartgoal, estatus
export default function CommitmentsTable() {

//funcion para el boton editar nos lleve a la ruta de tablas
// const btnsEdit = newPost.querySelectorAll('.a-edit');
//       btnsEdit.forEach((btn) => {
//         btn.addEventListener('click', (e) => {
//           e.preventDefault();
//           idPostToEdit = e.currentTarget.dataset.id;
//           onNavigate('/edit-commitment');
//         });


//const btnsEdit = actions.querySelectorAll('.btn-edit-actions');
//       btnsEdit.forEach((btn) => {
//         btn.addEventListener('click', (e) => {
//           e.preventDefault();
//           idPostToEdit = e.currentTarget.dataset.id;
//           onNavigate('/edit-commitment');
//         });


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
              <TableCell>period</TableCell>
              <TableCell>goal<br/><ProgressBar/></TableCell>
              <TableCell>status</TableCell>
              <TableCell><Button variant="contained" color="secondary" className='btn-edit-actions'>Editar</Button></TableCell>
              </TableRow>
          </TableBody>


          {/* //crear por cada coleccion creada, crear un fila en la tablas solo para ver
          //los datos */}

          {/* <TableBody>
              <TableRow >
              <TableCell>{.period}</TableCell>
              <TableCell>{.goal}<ProgressBar/></TableCell>
              <TableCell>{.status}</TableCell>
              <TableCell><Button variant="contained" color="success" className='btn-edit-actions'>Editar</Button></TableCell>
              </TableRow>
          </TableBody> */}

          {/* <TableBody>
            {data.map(###=>(
              <TableRow key={###.id}>
              <TableCell>{###.periodo}</TableCell>
              <TableCell>{###.main}</TableCell>
              <TableCell>{###.status}</TableCell>
              <TableCell>{###.actions}</TableCell>
              <TableCell>
                <Edit/>
                &nbsp;&nbsp;&nbsp;
                <Delete/>
              </TableCell>
              </TableRow>
            ))}
          </TableBody> */}
        </Table>
      </TableContainer>
    </Container>
    </div>
    
  );
}
