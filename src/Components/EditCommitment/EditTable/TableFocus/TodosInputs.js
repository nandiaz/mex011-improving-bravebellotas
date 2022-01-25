import React from 'react';

export const TodosInputs = () => {
  return (<div>

Main-Goal
<FormControl sx={{ width: 3 / 9, minWidth: "10em" }} onSubmit={ putData }>
          <TextField            
            label="Main Goal"            
          />  
<FormControl/>    

Areas-Of-Focus
<FormControl sx={{ width: 3 / 9, minWidth: "10em" }} onSubmit={ putData }>
          <TextField            
            label="Categories"            
          />  
<FormControl/> 
Action-Plan
<FormControl sx={{ width: 3 / 9, minWidth: "10em" }} onSubmit={ putData }>
          <TextField            
            label="Smart Goal"            
          />  
          <TextField            
            label="By When"            
          />  
          <TextField            
            label="Status"            
          />  
<FormControl/> 
Accountability
<FormControl sx={{ width: 3 / 9, minWidth: "10em" }} onSubmit={ putData }>
          <TextField            
            label="Contact"            
          />  
          <TextField            
            label="Frecuency"            
          />  
          <TextField            
            label="Via"            
          />  
<FormControl/> 
Plan Deliberate Practices
<FormControl sx={{ width: 3 / 9, minWidth: "10em" }} onSubmit={ putData }>
          <TextField            
            label="Action/Practice/Habit"            
          />  
          <TextField            
            label="Frecuency"            
          />             
<FormControl/> 
Deliberate Practice Log
<FormControl sx={{ width: 3 / 9, minWidth: "10em" }} onSubmit={ putData }>
          <TextField            
            label="Action/Practice/Habit"            
          />  
          <TextField            
            label="Date"  
            type="date"          
          /> 
          <TextField            
            label="Outcome"            
          />              




<FormControl/> 
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

  </div>);
};


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
