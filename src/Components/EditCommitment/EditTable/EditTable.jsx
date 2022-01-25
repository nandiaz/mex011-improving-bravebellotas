import { Box, Table, Paper, Typography, TableContainer } from "@mui/material";
import EditTableRow from "./EditTableRow";
import EditTableHead from "./EditTableHead";
import React, { useEffect } from "react";

export default function EditTable({ title, tableData: data, selectedPeriod, currentUser, endpoint }) {

  const filteredInfo = data
  // console.log(filteredInfo)
  let headValues = Object.keys(data[0]);
  const rows = data.map((obj) =>
    Object.values(obj).splice(4, headValues.length)
  );
  headValues = headValues.splice(4, headValues.length).map(title=>title.replace(/-/g, " "));

  return (
    <>
      <TableContainer
        component={Paper}
        sx={{ width: 3 / 4, mx: "auto", my: "1em" }}
      >
        <Typography id={title} sx={{ textAlign: "center" }}>
          {title ? title.replace(/-/g, " ") : null}
        </Typography>
        {data ? (
          <Table sx={{ width: 7 / 8, mx: "auto" }} aria-label="simple table">
            <EditTableHead headValues={headValues} />
            <EditTableRow rows={rows} endpoint={endpoint} />
          </Table>
        ) : null}
      </TableContainer>
      <Box
        sx={{
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
        ></Box>
      </Box>
    </>
  );
}
