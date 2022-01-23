import React from 'react';
import { Table, TableContainer, TableHead, TableCell, TableRow, TableBody, Container } from '@material-ui/core';
import Button from '@mui/material/Button';
import '../../Styles/CommitmentsTable.css';

export default function CommitmentsTable() {
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
              <TableRow>
              <TableCell>Q4</TableCell>
              <TableCell>Documentarse</TableCell>
              <TableCell>Activo</TableCell>
              <TableCell><Button variant="contained" color="success">Editar</Button></TableCell>
              </TableRow>

              <TableRow>
              <TableCell>Q3</TableCell>
              <TableCell>Certificaciones Corporativas</TableCell>
              <TableCell>Pausado</TableCell>
              <TableCell><Button variant="contained" color="warning">Editar</Button></TableCell>
              </TableRow>

              <TableRow>
              <TableCell>Q2</TableCell>
              <TableCell>Certificaciones Udemy</TableCell>
              <TableCell>Inactivo</TableCell>
              <TableCell><Button variant="outlined" color="error" >Editar</Button></TableCell>
              </TableRow>

              <TableRow>
              <TableCell>Q1</TableCell>
              <TableCell>Certificaciones Platzy</TableCell>
              <TableCell>Inactivo</TableCell>
              <TableCell><Button variant="outlined" color="error">Editar</Button></TableCell>
              </TableRow>
          </TableBody>
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
