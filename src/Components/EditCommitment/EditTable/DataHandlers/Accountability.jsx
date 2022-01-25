import { FormControl, TextField, Box, Fab } from "@mui/material";
import { Add } from "@mui/icons-material";

export default function Accountability() {
  return (
    <>
      <Box>
        <FormControl>
          <TextField label="Contact" />
          <TextField label="Frequency" />
          <TextField label="Via" />
        </FormControl>
        <Fab color="primary" aria-label="add">
          <Add />
        </Fab>
      </Box>
    </>
  );
}
