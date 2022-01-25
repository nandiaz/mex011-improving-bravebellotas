import { FormControl, TextField, Box, Fab } from "@mui/material";
import { Add } from "@mui/icons-material";

export default function AreasFocus() {
  return (
    <>
      <Box>
        <FormControl>
          <TextField label="Areas of Focus" />
        </FormControl>
        <Fab color="primary" aria-label="add">
          <Add />
        </Fab>
      </Box>
    </>
  );
}
