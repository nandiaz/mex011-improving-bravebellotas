import {
  Box,
  Fab,
  Table,
  Paper,
  Typography,
  TableContainer,
} from "@mui/material";
import EditTableRow from "./EditTableRow";
import EditTableHead from "./EditTableHead";
import React from "react";
// import TableInputs from "./TableInputs";

export default function EditTable({ title, setNewData, data, displayTitle, fixDisplay }) {
  // This is a mock, it will be received from firestore

  const actionTableInfo = [
    {
      "SMART-Goal": "Learn time management tool",
      "By When": "January 22, 2022",
    },
    {
      "SMART-Goal": "Improve my dev skills",
      "By When": "Next month",
    },
  ];
  // console.log(data[title])

  const headValues = Object.keys(
    Array.isArray(data[title]) ? (data[title][0]) : data[title]
  );
  const rows = actionTableInfo.map((obj) => Object.values(obj));

  const infoRows = Array.isArray(data[title])
    ? data[title].map((obj) => Object.values(obj))
    : "Nomiciela"/* Object.keys(data[title]) > 1
    ? [[...data[title]]]
      : [...data[title]]; */
  
  console.log(infoRows)
  

  return (
    <>
      <TableContainer
        component={Paper}
        sx={{ width: 1 / 3, mx: "auto", my: "1em" }}
      >
        <Typography id={title} sx={{ textAlign: "center" }}>
          {displayTitle}
        </Typography>
        <Table sx={{ width: 7 / 8, m: 2 }} aria-label="simple table">
          <EditTableHead headValues={headValues} fixDisplay={fixDisplay} />
          <EditTableRow rows={rows} />
        </Table>
      </TableContainer>
      <Box
        sx={{
          width: 1 / 3,
          display: "flex",
          flexWrap: "no-wrap",
          mx: "auto",
          justifyContent: "space-between",
        }}
      >
        <Box
          component="section"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {/* {headValues.map((input, index) => (
            <TableInputs input={input} key={input + index} />
          ))} */}
        </Box>
        <Fab
          color="secondary"
          aria-label="add"
          className="material-icons"
          sx={{ width: "3em", height: "3em" }}
          /* onClick={(e) => addData(e)} */
        >
          +
        </Fab>
      </Box>
    </>
  );
}
