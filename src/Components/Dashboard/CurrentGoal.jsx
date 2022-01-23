import React from 'react';
import TextField from '@mui/material/TextField';
import '../Styles/CurrentGoal.css';

import { useDataContext } from "../../Hooks/json-provider";
import { useState, useEffect } from "react";

//importar la base de datos
//import {db} from "firebase-config.js"
//trear de la bas ede tados el currente goal actual y el q

export default function CurrentGoal() {
  //hook para la data
  const { data, setData } = useDataContext();
  const [goal, setGoal]=useState({
    main-goal: " "
  })
  // const [newGoal, setNewGoal]= useState({});
  // const [goalData, setGoalData]=useState();
  //const {id, smart-goal} = goal;

  useEffect(() => {
    if (data) {
      setGoal(data["Main-Goal"][setData]);
    }
  }, [data]);
  console.log('Estoy en los goals');

  return (
    <div className='current-goal'>
       <h2 className='title-current-goal'>Current Goal</h2>
      {goal
      ?Object.keys(goal).map((title, description) => (

        <TextField
          key={title + description}
          title={title}
         
          id="filled-full-width"
          style={{ margin: 8 }}
          placeholder="Learn to create and iterate at each step..."
          // value={goal}
          helperText=""
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />

      ))

      : null}

      
    </div>
  
  );
}
