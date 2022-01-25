/* eslint-disable react-hooks/exhaustive-deps */
import NavBar from "./NavBar";

import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import EditTable from "./EditTable/EditTable";
import { useDataContext } from "../../Hooks/json-provider";
import TableInputs from "./EditTable/TableInputs";

export default function EditCommitment() {
  const id = useParams();
  const { data, currentAmbition, selectedPeriod, error, currentUser } =
    useDataContext();
  const [goal, setGoal] = useState();

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
      /* setGoal(
        data.mainGoal.filter((info) => info.ambition === currentAmbition)[0][
          "name"
        ]
      );
      console.log(goal) */
      console.log(currentAmbition);
    } else if (error) console.log(error);
  }, [data]);

  return (
    <Box component="main">
      <NavBar />
      {data ? (
        <>
          <Typography>
            Main Goal: {data ? data.mainGoal[0].name : null}
          </Typography>
          <Typography>Period: {data ? data.period[0].id : null}</Typography>
        </>
      ) : null}
      {data ? (
        Object.keys(data).map((title, index) =>
          title !== "period" &&
          title !== "mainGoal" &&
          title !== "ambition" &&
          title !== "users" ? (
            <EditTable
              key={title + index}
              title={endpoints[index]}
              endpoint={endpoints[index]}
              tableData={data[title]}
              selectedPeriod={selectedPeriod}
            />
          ) : null
        )
        
      ) : !error ? (
        <Typography>Loading...</Typography>
      ) : (
        <Typography>There was an error, please reload the page</Typography>
      )}
    </Box>
  );
}

/* <TableFocus key={title + index}
                title={endpoints[index]}
                tableData={data[title]}
                selectedPeriod={selectedPeriod} /> */
