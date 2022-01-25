import { FormControl, InputLabel, Input } from "@mui/material";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import { useState } from "react";
import { useDataContext } from "../../../Hooks/json-provider";

export default function TableInputs({ title, tableData: data, selectedPeriod, currentUser }) {

  const { jsonData } = useDataContext()

  const [smartGoal, setSmartGoal] = useState('');
  const [byWhen, setByWhen] = useState('');
  const [status, setStatus] = useState('');

  const [dataInput, setDataInput] = useState(" ");

  const filteredInfo = data
  // console.log(filteredInfo)
  let headValues = Object.keys(data[0]);
  const rows = data.map((obj) =>
    Object.values(obj).splice(4, headValues.length)
  );

  //console.log(rows)
  headValues = headValues.splice(4, headValues.length).map(title => title.replace(/-/g, " "));

  const areasOfFocus =
  {
    "id": "",
    "user": "",
    "ambition": "",
    "period": "",
    "Categories": []
  }
  

  const putData = async ( e) => {
    e.preventDefault();
    /* await jsonData(`http://localhost:5000/${endpoints}`, "POST")
    alert(`Text ${byWhen} ${smartGoal}`) */

  }

  const addField = (e) => {
    e.preventDefault();
    console.log(dataInput)
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
     
  }


  // jsondata(url, "PUT", info )




  return (
    <>
        <FormControl sx={{ width: 3 / 9, minWidth: "10em" }} onSubmit={putData}>
          <TextField
            value={ smartGoal }
            label="Smart Goal"  
            type="text"
            onChange={(e) => setSmartGoal(e.target.value)}
          />        
        
        <TextField
          value={byWhen}
          label="By When"
          type="text"
          onChange={(e) => setByWhen(e.target.value)}
          />
              
      <TextField
        value={status}  
        label="Status"      
        type="text"
        onChange={(e) => setStatus(e.target.value)}
      />

    </FormControl>
    
      <Button
        variant="contained"
        size="medium"
        color="primary"
        className="btt-add"
        type="submit"
        value="add" > Add </Button>
    </>
  );
}















/* 
import { FormControl, InputLabel, Input } from "@mui/material";
import { useState } from "react";
import { useDataContext } from "../../../Hooks/json-provider";

export default function TableInputs({ input }) {

  const { jsonData, currentUser, data } = useDataContext()

  /* let [info, setInfo] = useState({
    "Career-Ambitions": {        
        "user": "",
        "status": "",        
        "description": ""
      },
      "Period": [
        {
          "id": "",
          "ambition": "",
          "user": "",
          "status": ""
        }
      ],
      "Main-Goal": [
        {
          "id": 1,
          "user": "",
          "ambition": 1,
          "period": "",
          "name": ""
        }
      ],
      "Areas-Of-Focus": [
        {
          "id": "",
          "user": "",
          "ambition":"",
          "period": "",
          "Categories": []
        }
      ],
      "Action-Plan": [
        {
          "id": "",
          "user": "",
          "ambition": "",
          "period": "",
          "SMART-Goal": "",
          "By-When": new Date().getFullYear(),
          "status": "",
        }
      ],
      "Accountability": [
        {
          "id": "",
          "user": "",
          "ambition": "",
          "period": "",
          "Contact": "",
          "Frequency": "",
          "Via": ""
        }
      ],
      "Planned-Deliberate-Practices": [
        {
          "id": "",
          "user": "",
          "ambition": "",
          "period": "",
          "Action/Practice/Habit": "",
          "Frequency": "",
        }
      ],
      "Deliberate-Practice-Log": [
        {
          "id": "",
          "user": "",
          "ambition": "",
          "period": "",
          "Actions/Practices/Habits": "",
          "Date": new Date().getFullYear(),
          "Outcome": ""
        }
      ]       
    })    */

/* const careerAmbition = {
   "user": "",
   "status": "",
   "description": ""
 }
 const period =
 {
   "id": "",
   "ambition": "",
   "user": "",
   "status": ""
 }
 const mainGoal = {
   "id": 1,
   "user": "",
   "ambition": 1,
   "period": "",
   "name": ""
 }
 const areasOfFocus =
 {
   "id": "",
   "user": "",
   "ambition": "",
   "period": "",
   "Categories": []
 }
 const actionPlan =
 {
   "id": "",
   "user": "",
   "ambition": "",
   "period": "",
   "SMART-Goal": "",
   "By-When": new Date().getFullYear(),
   "status": "",
 }
 const accountability =
 {
   "id": "",
   "user": "",
   "ambition": "",
   "period": "",
   "Contact": "",
   "Frequency": "",
   "Via": ""
 }
 const plannedDeliberatePractices = {
   "id": "",
   "user": "",
   "ambition": "",
   "period": "",
   "Action/Practice/Habit": "",
   "Frequency": "",
 }
 const deliberatePracticeLog = {
   "id": "",
   "user": "",
   "ambition": "",
   "period": "",
   "Actions/Practices/Habits": "",
   "Date": new Date().getFullYear(),
   "Outcome": ""
 }
 
 const endpoints = [
   "Career-Ambitions",
   "Period",
   "Main-Goal",
   "Areas-Of-Focus",
   "Action-Plan",
   "Accountability",
   "Planned-Deliberate-Practices",
   "Deliberate-Practice-Log",
 ]
 
 const putData = (endpoints) => {
   jsonData(`http://localhost:5000/${endpoints}`, "POST")
 }
 
 const addField = (careerAmbition, period, mainGoal, areasOfFocus, actionPlan, accountability, plannedDeliberatePractices, deliberatePracticeLog) => {
  
 }
 
 const saveData = () => {
   putData( currentUser )
 }
 
 
 // jsondata(url, "PUT", info )
 
 
 
 
 return (
   <>
     {data
       ? Object.keys(data).map((title, index) =>
         title !== "period" &&
           title !== "mainGoal" &&
           title !== "ambition" &&
           title !== "users" ? (
           <FormControl key={title + index} sx={{ width: 4 / 9, minWidth: "10em" }}>
             <InputLabel htmlFor={`${endpoints[index]}-label`}>{data[title]}</InputLabel>
             <Input value={`${endpoints[index]}-label`} type="text" onChange={(e) => addField(e.target.value)} />
             <button> Add </button>
           </FormControl>
         ) : null
       )
       : null}
 
 
 
   </>
 );
}
*/