import {
  Box,
  Fab,
  Table,
  Paper,
  Input,
  Typography,
  InputLabel,
  FormControl,
  TableContainer,
} from "@mui/material";
import EditTableRow from "./EditTableRow";
import EditTableHead from "./EditTableHead";
import React from "react";
// import TableInputs from "./TableInputs";

export default function EditTable({ title, setNewData, data }) {
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

  const headValues = Object.keys(actionTableInfo[0]);
  const rows = actionTableInfo.map((obj) => Object.values(obj));
  

  return (
    <>
      <TableContainer
        component={Paper}
        sx={{ width: 1 / 3, mx: "auto", my: "1em" }}
      >
        <Typography id={title} sx={{ textAlign: "center" }}>
          {title}
        </Typography>
        <Table sx={{ width: 7 / 8, m: 2 }} aria-label="simple table">
          <EditTableHead headValues={headValues} />
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
          color="primary"
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
