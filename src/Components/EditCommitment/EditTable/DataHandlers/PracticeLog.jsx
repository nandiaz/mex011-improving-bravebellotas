import { FormControl, TextField, Box, Fab } from "@mui/material";
import { Add } from "@mui/icons-material";

export default function PracticeLog() {
  return (
    <>
      <Box>
        <FormControl>
          <TextField label="Actions/Practices/Habits" />
          <TextField label="Date" />
          <TextField label="Outcome" />
        </FormControl>
        <Fab color="primary" aria-label="add">
          <Add />
        </Fab>
      </Box>
    </>
  );
}
