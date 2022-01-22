/* eslint-disable react-hooks/exhaustive-deps */
import NavBar from "./NavBar";
import { Box } from "@mui/material";
import { useState } from "react";
import EditTable from "./EditTable/EditTable";
import {useFirestoreContext} from '../../Firebase/data-provider'

export default function EditCommitment() {
  const {data} = useFirestoreContext()
  const [newData, setNewData] = useState({});

  // Trial values
  const titles = ["focus", "plan", "practice", "accountablity", "log"];

  console.log(data)

  return (
    <Box component="main">
      <NavBar />
      {titles.map((title, index) => (
        <EditTable key={title + index} title={title} data={data} setNewData={setNewData} />
      ))}
    </Box>
  );
}
