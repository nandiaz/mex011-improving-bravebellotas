import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import "../Styles/CareerAmbition.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";

export default function CareerAmbition() {
  //  const [data, setData] = useState({
  //    nombre:'',
  //  });
  //const [myValueCareer, setMyValueCareer] = useState('');

  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
    localStorage.setItem("inputValue", e.target.value);
  };

  useEffect(() => {
    setValue(localStorage.getItem("inputValue"));
  }, []);

  const cleanText = () => {
    setValue("");
  };

  // let url = "http://localhost:5000/Career-Ambitions";
  // const fetchApi = async () => {
  //   const response =await fetch(url)
  //   console.log(response.status)
  //   const responseJSON= await response.json();
  //   setData(responseJSON)
  //   console.log(responseJSON)
  // }

  // useEffect (() => {
  //   fetchApi()
  // }, [])

  //   const handleChange = (event) => {
  //     console.log('good check!!!');
  //     setData({
  //       ...data,
  //       [event.target.name]: event.target.value
  //     })
  //   };

  //  const handleClick = (event) => {
  //   console.log('data reset');
  //   event.target.reset(data);
  //   };

  return (
    <Container maxWidth="lg">
      <div className="career-ambition">
        <h1 className="title-career-ambition">Career Ambition</h1>
        <br />
        {/* <h2>{data.nombre}</h2> */}
        {/* <h3 className='title-value-career-ambition'>{value}</h3> */}
        <br />

        <TextField
          label="I am your goal write me...!"
          id="filled-full-width"
          name="career"
          style={{ margin: 10 }}
          placeholder=""
          value={value}
          onChange={handleChange}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />

        <Stack spacing={2} direction="row">
          <Button variant="contained" onClick={(e) => cleanText(value)}>
            Editar
          </Button>
        </Stack>
      </div>
    </Container>
  );
}

// value={myValueCareer}
// onChange={(e) => setMyValueCareer(e.target.value)}

{
  /* <Box 
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
            return <li key={index}> {data.name}<br/>{data.description}</li>
          })
        }
        </Box> */
}

{
  /* <TextField
          value={myValue}
          name='nombre'
          fullWidth='1'
            //   value={ !data ? 'Cargando...' :
            //   data.map((data, index) => {
            //     return <li key={index}> {data.name}<br/>{data.description}</li>
            //   })
            // }
            onChange={handleChange}
            />
        <br/>

        <Stack spacing={2} direction="row">
          <Button variant="contained" onClick={handleClick}>
            Editar
          </Button>
        </Stack> */
}
