import { FormControl, InputLabel, Input } from "@mui/material";
import { useState } from "react";
import { useDataContext } from "../../../Hooks/json-provider";

export default function TableInputs({ input }) {

  const { jsonData, currentUser } = useDataContext()
  
  let [info, setInfo] = useState({
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
    })   
  
  const [goal, setGoal] = useState("");
  const [dateGoal, setDateGoal] = useState("");
  const careerAmbition =  {        
      "user": "",
      "status": "",        
      "description": ""
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

  const putData = (endpoints)=>{
    jsonData(`http://localhost:5000/${endpoints}`,  "PUT", info)
  }
  /* const saveData = () =>{
    putData
  }
  */
  const addMainGoal = (text, date) => {
    if (text !== '') {
      setInfo({ ...info, "Action-Plan": [...info["Action-Plan"], { "SMART-Goal": text, "By-When": date }] })
        setGoal('')
        setDateGoal('')
    } 
}

const handleMainGoal = (text) => {
    setGoal(text)
}
// jsondata(url, "PUT", info )
 
   
  

  return (
    <>
      <FormControl sx={{ width: 4 / 9, minWidth: "10em" }}>
        <InputLabel htmlFor={`${input}-label`}>{input}</InputLabel>
        <Input id={`${input}-label`} type="text" aria-label={input} />
        
      </FormControl>
    </>
  );
}
