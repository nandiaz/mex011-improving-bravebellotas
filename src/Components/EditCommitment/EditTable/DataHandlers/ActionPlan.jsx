import { FormControl, TextField, Box, Button } from "@mui/material";
import { Add } from "@mui/icons-material";
import { useDataContext } from "../../../../Hooks/json-provider";
import React, { useState } from "react";

const styles = {
  display: "flex",
  flexDirection: "row",
  gap: "20",
  justifyContent: "space-around",
};

const inputs = { width: "40%" };

export default function ActionPlan({ endpoint }) {
  const [goal, setGoal] = useState();
  const [when, setWhen] = useState();
  const { setTrigger, jsonData } = useDataContext();

  const post = () => {
    console.log(goal);
    jsonData(`http://localhost:5000/${endpoint}`, "POST", {
      id: 0,
      user: "squad@braveBellotas.com",
      ambition: 1,
      period: "Q1-2022",
      "SMART-Goal": goal,
      "By-When": when,
      status: false,
    });
    setTrigger("post");
    setGoal("");
    setWhen("");
  };

  return (
    <>
      <Box sx={{ mt: "1em", width: "80%", ...styles }}>
        <FormControl sx={{ width: "70%", ...styles }}>
          <TextField
            label="SMART Goal"
            sx={inputs}
            value={goal}
            onChange={(e) => {
              setGoal(e.target.value);
            }}
          />
          <TextField
            label="By When"
            sx={inputs}
            value={when}
            onChange={(e) => {
              setWhen(e.target.value);
            }}
          />
        </FormControl>
        <Button
          color="primary"
          aria-label="add"
          variant="outlined"
          sx={{ mr: "3em" }}
          onClick={() => post()}
        >
          <Add />
        </Button>
      </Box>
    </>
  );
}
