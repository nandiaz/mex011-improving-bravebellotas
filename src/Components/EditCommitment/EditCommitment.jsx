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
