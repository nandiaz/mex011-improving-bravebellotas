/* eslint-disable react-hooks/exhaustive-deps */
import NavBar from "./NavBar";
import { Box } from "@mui/material";
import { useState } from "react";
import EditTable from "./EditTable/EditTable";
import { useDataContext } from "../../Hooks/json-provider";

//importacion para qeu el boton de 90commitment venga aca
import {useParams} from 'react-router-dom';


export default function EditCommitment() {

  const id = useParams()

  const { data} = useDataContext();
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
