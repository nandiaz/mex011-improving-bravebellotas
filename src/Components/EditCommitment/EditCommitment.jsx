/* eslint-disable react-hooks/exhaustive-deps */
import NavBar from "./NavBar";
import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import EditTable from "./EditTable/EditTable";
import { useDataContext } from "../../Hooks/json-provider";

export default function EditCommitment() {
  const { data, selectedPeriod, currentUser, currentAmbition } =
    useDataContext();
  const link = "http://localhost:5000/";
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
    }
  }, [data]);

  return (
    <Box component="main">
      <NavBar />
      {data ? (
        <>
          <Typography>
            Main Goal:{" "}
            {data
              ? data.mainGoal.filter(
                // something doesn't let it render all the times
                // add current user filter
                  (info) => info.ambition === currentAmbition
                )[0].name
              : null}
          </Typography>
          <Typography>
            Period:{" "}
            {data
              ? data.period.filter(
                  (data) => data.ambition === currentAmbition
                )[0].id
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
