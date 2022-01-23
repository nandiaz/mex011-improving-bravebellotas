import { TableRow, TableHead, TableCell } from "@mui/material";

export default function EditTableHead({ headValues, fixDisplay }) {
  return (
    <>
      <TableHead>
        <TableRow
          sx={{
            "&:last-child td, &:last-child th": { border: 0 },
            width: "fit-content",
          }}
        >
          {headValues.map((value) => (
            <TableCell
              key={value}
              align="left"
              component="th"
              sx={{ fontWeight: "700", width: "fit-content" }}
            >
              {fixDisplay(value)}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    </>
  );
}
