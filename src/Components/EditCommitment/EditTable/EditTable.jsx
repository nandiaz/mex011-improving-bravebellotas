import Table from "@mui/material/Table";
import Paper from "@mui/material/Paper";
import EditTableRow from "./EditTableRow";
import EditTableHead from "./EditTableHead";
import TableContainer from "@mui/material/TableContainer";

export default function EditTable() {
  // Se recibirá de firestore, esto es sólo un mock
  
  const actionTableInfo = [
    {
      "SMART-Goal": "Learn time management tool",
      "By When": "January 22, 2022",
    },
    {
      "SMART-Goal": "Improve my dev skills",
      "By When": "Next month",
    },
  ];

  const headValues = Object.keys(actionTableInfo[0]);
  const rows = actionTableInfo.map((obj) => Object.values(obj));

  return (
    <>
      <TableContainer
        component={Paper}
        sx={{ width: "80%", margin: "auto", marginTop: "1em" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <EditTableHead headValues={headValues} />
          <EditTableRow rows={rows} />
        </Table>
      </TableContainer>
    </>
  );
}
