import React, { useState } from 'react';

export const TableFocus = ({ title, tableData: data, selectedPeriod, currentUser }) => {
    const [inputs, setInputs] = useState({});
    
    const handleChange = (event) => {
        const byWhen = event.target.name;
        const smartGoal = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }

    const [dataInput, setDataInput] = useState(" ");
    let headValues = Object.keys(data[0]);
    const byWhen= 
    headValues.map((hvalue) => {
   if (hvalue = "By-When")
    
})

  return (<div>
      <FormControl key={hvalue} sx={{ width: 4 / 9, minWidth: "10em" }}>
          <TextField
            label={hvalue}
            
            type="text"
          />

        </FormControl>

  </div>);
};
