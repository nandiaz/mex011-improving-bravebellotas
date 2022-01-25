import { FormControl, TextField, Box, Fab } from "@mui/material";
import { Add } from "@mui/icons-material";

export default function PlannedPractices() {
  return (
    <>
      <Box>
        <FormControl>
          <TextField label="Action/Practice/Habit" />
          <TextField label="Frequency" />
        </FormControl>
        <Fab color="primary" aria-label="add">
          <Add />
        </Fab>
      </Box>
    </>
  );
}
