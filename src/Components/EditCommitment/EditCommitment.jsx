/* eslint-disable react-hooks/exhaustive-deps */
import NavBar from "./NavBar";

import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import EditTable from "./EditTable/EditTable";
import { useDataContext } from "../../Hooks/json-provider";

export default function EditCommitment() {
  const id = useParams();

  const { data, currentAmbition, selectedPeriod, error, setCurrentAmbition } = useDataContext();
  const [periodData, setPeriodData] = useState();

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
          if (info.status === true) console.log("holi")/* setCurrentAmbition(info.id) */;
      });
      console.log(currentAmbition)
    } else if(error) console.log(error)
  }, [data]);

  return (
    <Box component="main">
      <NavBar />
      {data ? (
        <>
          <Typography>
            Main Goal:{" "}
            {data
              ? data.mainGoal/* .filter(
                  // something doesn't let it render all the times
                  // add current user filter
                  (info) => info.ambition === ambition
                ) */[0]["name"]
              : null}
          </Typography>
          <Typography>
            Period:{" "}
            {data
              ? data.period/* .filter((data) => data.ambition === ambition) */[0].id
              : null}
          </Typography>
        </>
      ) : null}
      {data
        ? Object.keys(data).map((title, index) =>
            title !== "period" &&
            title !== "mainGoal" &&
            title !== "ambition" &&
            title !== "users" ? (
              <EditTable
                key={title + index}
                title={endpoints[index]}
                tableData={data[title]}
                selectedPeriod={selectedPeriod}
              />
            ) : null
          )
        : null}
    </Box>
  );
}
