import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

export default function EditTableRow(rows) {
  /*
Ver por qué se guarda en un objeto y no sólo queda el arreglo
[['Learn time management tool', 'January 22, 2022']
['Improve my dev skills', 'Next month']]
*/

  return (
    <>
      <TableBody>
        {rows.rows.map((row) => (
          <TableRow key={row}>
            {row.map((info) => (
              <TableCell scope="row" key={info}>
                {info}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </>
  );
}
