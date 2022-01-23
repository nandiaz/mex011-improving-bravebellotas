/* eslint-disable react-hooks/exhaustive-deps */
import NavBar from "./NavBar";
import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import EditTable from "./EditTable/EditTable";
import { useFirestoreContext } from "../../Firebase/data-provider";

export default function EditCommitment() {
  const { data, selectedPeriod } = useFirestoreContext();
  const [newData, setNewData] = useState(data);
  const [periodData, setPeriodData] = useState();

  useEffect(() => {
    if (data)
      setPeriodData(
        data["career-ambitions"]["career-ambition-1"]["periods"][selectedPeriod]
      );
  }, [data]);

  const fixDisplay = (title) =>
    title
      .replace(/-/g, " ")
      .replace(/[\d.]/g, "")
      .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());

  return (
    <Box component="main">
      <NavBar />
      {periodData
        ? Object.keys(periodData)
            .filter((title) => title !== "main-goal")
            .map((title, index) => (
              <EditTable
                key={title + index}
                title={title}
                displayTitle={fixDisplay(title)}
                data={periodData}
                setNewData={setNewData}
                fixDisplay={fixDisplay}
              />
            ))
        : null}
    </Box>
  );
}
