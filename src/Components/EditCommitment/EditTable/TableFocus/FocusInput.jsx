import { FormControl, InputLabel, Input } from "@mui/material";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import { useState } from "react";
import { useDataContext } from "../../../Hooks/json-provider";

export default function TableInputs({ title, tableData: data, selectedPeriod, currentUser }) {

  const { jsonData } = useDataContext()

  const [dataInput, setDataInput] = useState(" ");

  const filteredInfo = data
  // console.log(filteredInfo)
  let headValues = Object.keys(data[0]);
  const rows = data.map((obj) =>
    Object.values(obj).splice(4, headValues.length)
  );

  console.log(rows)
  headValues = headValues.splice(4, headValues.length).map(title => title.replace(/-/g, " "));

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

  const careerAmbition = {
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

  const putData = async (endpoints, e) => {
    e.preventDefault();

    await jsonData(`http://localhost:5000/${endpoints}`, "POST")

  }

  const addField = (e) => {
    e.preventDefault();
    console.log(dataInput)
  }

  const saveData = () => {
    putData(currentUser)
  }


  // jsondata(url, "PUT", info )




  return (
    <>
      {headValues.map((hvalue) => (
        <FormControl key={hvalue} sx={{ width: 4 / 9, minWidth: "10em" }}>
          <TextField
            label={hvalue}
            
            type="text"
          />

        </FormControl>
      ))
      }
      <button
        variant="contained"
        size="medium"
        color="primary"
        className="btt-add"
        type="submit"
        value="add" > Add </button>
    </>
  );
}



/* import { FormControl, InputLabel, Input } from "@mui/material";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import React, { useEffect } from 'react';
import { useDataContext } from '../../../../Hooks/json-provider';
import { useParams } from "react-router-dom";

export const FocusInput = () => {

    const { data, currentAmbition, selectedPeriod, error, setCurrentAmbition } = useDataContext();

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
              if (info.status === true) console.log('holaaaaaa');
          });          
        } else if(error) console.log(error)
      }, [data]);

  return (<div>
       <>
      {data.map((hvalue) => (
        <FormControl key={hvalue} sx={{ width: 4 / 9, minWidth: "10em" }}>
          <TextField
            label={hvalue}
            
            type="text"
          />

        </FormControl>
      ))
      }
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

 */