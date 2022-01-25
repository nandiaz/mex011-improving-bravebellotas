import { Box, Table, Paper, Typography, TableContainer } from "@mui/material";
import EditTableRow from "./EditTableRow";
import EditTableHead from "./EditTableHead";
import React from "react";

export default function EditTable({
  title,
  tableData: data,
  selectedPeriod,
  currentUser,
  endpoint,
}) {
  // Filtering the info is still needed
  let headValues = Object.keys(data[0]);
  const rows = data.map((obj) =>
    Object.values(obj).splice(4, headValues.length)
  );
  headValues = headValues
    .splice(4, headValues.length)
    .map((title) => title.replace(/-/g, " "));

  return (
    <>
      <TableContainer
        component={Paper}
        sx={{
          width: 3 / 4,
          mx: "auto",
          my: "2em",
          boxShadow: "none",
          border: "1px solid black",
          py: 3,
        }}
      >
        <Typography
          id={title}
          sx={{
            fontWeight: "700",
            color: "#4597D3",
            fontSize: "1.5em",
            textAlign: "center",
          }}
        >
          {title ? title.replace(/-/g, " ") : null}
        </Typography>
        {data ? (
          <Table sx={{ width: 7 / 8, mx: "auto" }} aria-label="simple table">
            <EditTableHead headValues={headValues} />
            <EditTableRow rows={rows} data={data} endpoint={endpoint} />
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
