import {TableRow, TableHead, TableCell} from "@mui/material";

export default function EditTableHead({headValues}) {
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
              id="bold"
              sx={{ fontWeight: "700", width: "fit-content" }}
            >
              {value}
            </TableCell>
          ))}
          <TableCell id="bold" sx={{width: 3 / 8} }>Actions</TableCell>
        </TableRow>
      </TableHead>
    </>
  );
}
