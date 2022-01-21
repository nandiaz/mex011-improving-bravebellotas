import React from 'react';
import { Table, TableContainer, TableHead, TableCell, TableRow, Container } from '@material-ui/core';
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
