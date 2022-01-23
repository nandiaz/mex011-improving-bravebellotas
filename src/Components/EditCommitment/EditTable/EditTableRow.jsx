import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

export default function EditTableRow({rows}) {
  return (
    <>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row}>
            {row.map((info) => (
              <TableCell scope="row" key={info} sx={{width: "fit-content",}}>
                {info}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </>
  );
}
