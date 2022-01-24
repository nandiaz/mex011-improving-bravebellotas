import React, { useState, useEffect } from "react";
//import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import '../Styles/CurrentGoal.css';


export default function CurrentGoal() {
  //hook para la data
  const [data, setData] = useState([]);
  let url = "http://localhost:5000/Action-Plan";

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
  // cambiar el nombre de campo  "SMART-Goal"
  return (
    <div className='current-goal'>
       <h2 className='title-current-goal'>Current Goal</h2>

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
            return <li key={index}> data.actionPlan[0]["SMART-Goal"]
          </li>
          })
        }
        </Box>


    </div>
  
  );
}
