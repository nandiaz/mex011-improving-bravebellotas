import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
    const response = await fetch(url)
    console.log(response.status)
    const responseJSON = await response.json();
    setData(responseJSON)
    console.log(responseJSON)
  }

  useEffect(() => {
    fetchApi()
  }, [])


  //  const editActions = () => {
  //     console.log('edit Action Plans');
  //   }

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
                <TableCell>Read a chapter of a book<br /> <br /><ProgressBar /></TableCell>
                <TableCell>status</TableCell>
                <TableCell>
                  <Link to="/edit-commitment">
                    <Button variant="contained">
                      <p>EDIT</p>
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            </TableBody>
            <TableBody>
              <TableRow >
                <TableCell>Q3</TableCell>
                <TableCell>Learn react <br /> <br /><ProgressBar /></TableCell>
                <TableCell>status</TableCell>
                <TableCell>
                  <Link to="/edit-commitment">
                    <Button variant="contained">
                      <p>EDIT</p>
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            </TableBody>
            <TableBody>
              <TableRow >
                <TableCell>Q2</TableCell>
                <TableCell>Learn import and modularization<br /> <br /><ProgressBar /></TableCell>
                <TableCell>status</TableCell>
                <TableCell>
                  <Link to="/edit-commitment">
                    <Button variant="contained">
                      <p>EDIT</p>
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            </TableBody>
            <TableBody>
              <TableRow >
                <TableCell>Q1</TableCell>
                <TableCell>Learn DB management<br /> <br /><ProgressBar /></TableCell>
                <TableCell>status</TableCell>
                <TableCell>
                  <Link to="/edit-commitment">
                    <Button variant="contained">
                      <p>EDIT</p>
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>

  );
}


{/* <Button variant="contained" color="secondary" className='btn-edit-actions'>Editar</Button></TableCell> */ }