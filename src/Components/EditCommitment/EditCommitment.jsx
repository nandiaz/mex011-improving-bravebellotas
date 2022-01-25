/* eslint-disable react-hooks/exhaustive-deps */
import NavBar from "./NavBar";
import "../Styles/EditTable.css";

import { useParams } from "react-router-dom";
import EditTable from "./EditTable/EditTable";
import TableInputs from "./EditTable/TableInputs";
import { EditOutlined } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useDataContext } from "../../Hooks/json-provider";

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
    <Box component="main" id="edit">
      <NavBar sx={{ position: "sticky" }} />
      {data ? (
        <>
          <Typography
            component="h2"
            sx={{
              color: "#005596",
              fontWeight: "700",
              fontSize: "2em",
              textAlign: "center",
              my: 2,
            }}
          >
            Main Goal: {data ? data.mainGoal[0].name : null}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              my: 1,
            }}
          >
            <Typography
              component="h2"
              sx={{ color: "#005596", textAlign: "center", fontSize: "1.5em" }}
            >
              Period: {data ? data.period[0].id : null}
            </Typography>
            <Button>
              <EditOutlined />
            </Button>
          </Box>
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
