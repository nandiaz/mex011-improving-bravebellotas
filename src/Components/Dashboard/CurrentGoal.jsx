import React from 'react';
import TextField from '@mui/material/TextField';
import '../Styles/CurrentGoal.css';
//importar la base de datos
//import {db} from "firebase-config.js"

//trear de la bas ede tados el currente goal actual y el q

export default function CurrentGoal() {

  //const {id, smart-goal} = goal;
  return (
    <div className='current-goal'>
       <h2 className='title-current-goal'>Current Goal</h2>
      <TextField
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
    </div>
  
  );
}
