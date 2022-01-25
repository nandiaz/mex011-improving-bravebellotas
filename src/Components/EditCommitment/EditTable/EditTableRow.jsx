import { TableBody, TableRow, TableCell, Button, TextField } from "@mui/material";
import { EditOutlined, DeleteOutlined } from "@mui/icons-material";
import { useDataContext } from "../../../Hooks/json-provider";

import { useState } from "react";

export default function EditTableRow({ rows, endpoint }) {
  const { jsonData } = useDataContext();
  console.log(endpoint)
  const [edit, setEdit] = useState(false);
  const del = () => {
    const action = window.confirm(`Are you sure you want to delete this row?`)
    jsonData(`http://localhost:5000/${endpoint}`, "DELETE");
  };
  return (
    <>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row}>
            {row.map((info) => 
              !edit ? (
                <TableCell scope="row" key={info} sx={{ width: "fit-content" }}>
                  {info}
                </TableCell>
              ) : (
                <TextField scope="row" key={info} >
                  {info}
                </TextField>
              ))}
            <TableCell sx={{ width: 3 / 8 }}>
              <Button onClick={()=> edit ? setEdit(false) : setEdit(true)}>
                <EditOutlined />
              </Button>
              <Button onClick={()=> del()}>
                <DeleteOutlined />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
}
