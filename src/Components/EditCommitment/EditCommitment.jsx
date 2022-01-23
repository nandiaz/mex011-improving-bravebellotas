/* eslint-disable react-hooks/exhaustive-deps */
import NavBar from "./NavBar";
import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import EditTable from "./EditTable/EditTable";
import { useDataContext } from "../../Hooks/json-provider";

export default function EditCommitment() {
  const { data, selectedPeriod } = useDataContext();
  const [periodData, setPeriodData] = useState();

  /* useEffect(() => {
    if (data) {
      setPeriodData(data);
    }
  }, [data]); */
  console.log(data.accountability[0]);

  return (
    <Box component="main">
      <NavBar />
      {periodData
        ? Object.keys(periodData).map((title, index) => (
            <EditTable
              key={title + index}
              title={title}
              data={periodData}
              setNewData={setPeriodData}
            />
          ))
        : null}
    </Box>
  );
}
