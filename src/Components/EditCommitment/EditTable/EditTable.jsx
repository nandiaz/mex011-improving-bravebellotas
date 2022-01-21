import {
  Box,
  Fab,
  Table,
  Paper,
  Input,
  TextArea,
  InputLabel,
  FormControl,
  TableContainer,
} from "@mui/material";
import EditTableRow from "./EditTableRow";
import EditTableHead from "./EditTableHead";
import React, { useState } from "react";

export default function EditTable({title}) {
  // Se recibirá de firestore, esto es sólo un mock

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
        <h2 id={title}>{title}</h2>
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
          {headValues.map((input, index) => (
            <>
              <FormControl sx={{ width: 4 / 9, minWidth: "10em" }} key={input}>
                <InputLabel htmlFor={`${input}-label`} key={index}>
                  {input}
                </InputLabel>
                <Input
                  id={`${input}-label`}
                  type="text"
                  aria-label={input}
                  key={index + 1}
                />
              </FormControl>
            </>
          ))}
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
