import {
  TableBody,
  TableRow,
  TableCell,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import { EditOutlined, DeleteOutlined } from "@mui/icons-material";
import { useDataContext } from "../../../Hooks/json-provider";

import { useState } from "react";

export default function EditTableRow({ rows, endpoint, data }) {
  const { jsonData, setTrigger } = useDataContext();
  const [end, setEnd] = useState();

  // console.log(endpoint);

  const del = (infoId) => {
    const action = window.confirm(`Are you sure you want to delete this row?`);
    if (action) {
      jsonData(
        `https://fake-api-bravebellotas.herokuapp.com/${endpoint}/${infoId}`,
        "DELETE"
      );
      setTrigger("del")
    };
  };
  return (
    <>
      <TableBody>
        {rows.map((row, i) => (
          <TableRow key={row}>
            {row.map((info) => (
              <TableCell scope="row" key={info} sx={{ width: "fit-content" }}>
                <Typography>{info}</Typography>
              </TableCell>
            ))}
            <TableCell sx={{ width: 3 / 8 }}>
              <Button
                data-id={data[i]["id"]}
                onClick={(e) => setEnd(e.target.getAttribute("data-id"))}
              >
                <EditOutlined />
              </Button>
              <Button
                data-id={data[i]["id"]}
                onClick={(e) => del(e.target.getAttribute("data-id"))}
              >
                <DeleteOutlined />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
}
