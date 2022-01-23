/* eslint-disable react-hooks/exhaustive-deps */
import NavBar from "./NavBar";
import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import EditTable from "./EditTable/EditTable";
import { useFirestoreContext } from "../../Firebase/data-provider";

export default function EditCommitment() {
  const { data, selectedPeriod } = useFirestoreContext();
  const [newData, setNewData] = useState({});
  const [periodData, setPeriodData] = useState();

  useEffect(() => {
    if (data) setPeriodData(
        data["career-ambitions"]["career-ambition-1"]["periods"][selectedPeriod]
      );
  }, [data]);

  return (
    <Box component="main">
      <NavBar />
      {periodData ? Object.keys(periodData).map((title, index) => (
        <EditTable
          key={title + index}
          title={title}
          data={periodData}
          setNewData={setNewData}
        />
      )) : null}
    </Box>
  );
}
