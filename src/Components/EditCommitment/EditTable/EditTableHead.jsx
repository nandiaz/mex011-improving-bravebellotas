import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";

export default function EditTableHead(headValues) {
  // Ver por qué headValues se guarda en un objeto y no sólo queda el arreglo
  return (
    <>
      <TableHead>
        <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
          {headValues.headValues.map((value) => (
            <TableCell
              key={value}
              align="left"
              component="th"
              sx={{ fontWeight: "700" }}
            >
              {value}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    </>
  );
}
