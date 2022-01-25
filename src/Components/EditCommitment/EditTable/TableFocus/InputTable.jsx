/* eslint-disable react-hooks/exhaustive-deps */

import { FormControl } from "@mui/material";
import React, { useState, useEffect } from "react";
import { TablesInputs } from "./TablesInputs";
//import { useDataContext } from "../../../../Hooks/json-provider";

//import EditTable from "./EditTable/EditTable";

//import TableInputs from "./EditTable/TableInputs";

const getDatafromLS = () => {
  const data = localStorage.getItem('goals');
  if (data) {
    return JSON.parse(data);
  }
  else {
    return []
  }
}

export default function InputTable() {

  //const { data, currentAmbition, selectedPeriod, error, setCurrentAmbition } = useDataContext();



  //const { jsonData } = useDataContext();



  const [focus, setFocus] = useState(getDatafromLS());

  const [smartGoal, setSmartGoal] = useState('');
  const [byWhen, setByWhen] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // creating an object
    let goal = {
      smartGoal,
      byWhen,
      status
    }
    setFocus([...focus, goal]);
    setSmartGoal('');
    setByWhen('');
    setStatus('');
    console.log(goal)
  }



  useEffect(() => {
    localStorage.setItem('goals', JSON.stringify(focus));
  }, [focus])

console.log( byWhen )

  return (
    <>

      <form sx={{ width: 3 / 9, minWidth: "10em" }} onSubmit={handleSubmit}>
        <input
          value={smartGoal}
          label="Smart Goal"
          type="text"
          onChange={(e) => setSmartGoal(e.target.value)}
        />

        <input          
          label="By When"
          type="text"
          onChange={(e) => setByWhen(e.target.value)}
          value={byWhen}
        />

        <input
          value={status}
          label="Status"
          type="text"
          onChange={(e) => setStatus(e.target.value)}
        />
        <button
          className="btt-add"
          type="submit"
          > Add </button>
      </ form>
      { focus.length>0 ? 
        <TablesInputs focus={focus} />
        :focus.length < 1
      }
      {focus.length < 1 && <div>No books are added yet</div>}
      



    </>
  );
}


/*

/* eslint-disable react-hooks/exhaustive-deps *//*
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import { FormControl } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useDataContext } from "../../../../Hooks/json-provider";

//import EditTable from "./EditTable/EditTable";

//import TableInputs from "./EditTable/TableInputs";

export default function InputTable() {

  const { data, currentAmbition, selectedPeriod, error, setCurrentAmbition } = useDataContext();

  const [smartGoal, setSmartGoal] = useState('');
  const [byWhen, setByWhen] = useState('');
  const [status, setStatus] = useState('');

  const { jsonData } = useDataContext();

  const endpoints = [
    "Career-Ambitions",
    "Period",
    "Main-Goal",
    "Areas-Of-Focus",
    "Action-Plan",
    "Accountability",
    "Planned-Deliberate-Practices",
    "Deliberate-Practice-Log",
  ];

  useEffect(() => {
    if (data && data !== {}) {
      console.log(data.ambition);
      data.ambition.forEach((info) => {
          if (info.status === true) console.log("holi")/* setCurrentAmbition(info.id) *//*;
});
console.log(currentAmbition)
} else if(error) console.log(error)
}, [data]);

 
const handleSubmit = (e) =>{
e.preventDefault();
console.log(e)
alert(`Text ${byWhen} ${smartGoal}`) 
}
const handleWhen = (when) =>{
console.log(when)
setByWhen(when)
}
const handleStatus = (status) =>{
console.log(status)
setStatus(status)
}
const handleGoal = (goal) =>{
setSmartGoal(goal)
}
 
const saveData = async (e)=>{
e.preventDefault();  
await jsonData(`http://localhost:5000/Action-Plan`, "POST")
console.log(e)
}
 
 
return (
<>

<FormControl sx={{ width: 3 / 9, minWidth: "10em" }} onSubmit={saveData}>
<input
  value={ smartGoal }
  label="Smart Goal"  
  type="text"
  onChange={(e) => handleGoal(e.target.value)}
/>        
 
<input
value={byWhen}
label="By When"
type="text"
onChange={(e) => handleWhen(e.target.value)}
/>
    
<input
value={status}  
label="Status"      
type="text"
onChange={(e) => handleStatus(e.target.value)}
/>
<button        
className="btt-add"
type="submit"
value="add" > Add </button>
</FormControl>
 
 
</>
 
 
 
 
);
}


*/