import { FormControl, TextField, Box, Fab } from "@mui/material";
import { Add } from "@mui/icons-material";

export default function ActionPlan() {
  return (
    <>
      <Box>
        <FormControl>
          <TextField label="SMART Goal" />
          <TextField label="By When" />
        </FormControl>
        <Fab color="primary" aria-label="add">
          <Add />
        </Fab>
      </Box>
    </>
  );
}
