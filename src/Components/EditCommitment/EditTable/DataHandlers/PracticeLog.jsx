import { FormControl, TextField, Box, Button } from "@mui/material";
import { Add } from "@mui/icons-material";

export default function PracticeLog() {

const styles = {
  display: "flex",
  flexDirection: "row",
  gap: "20",
  justifyContent: "space-around",
};

  return (
    <>
      <Box sx={{ mt: "1em", width: "80%", ...styles }}>
        <FormControl sx={{ width: "70%", ...styles }}>
          <TextField label="Actions/Practices/Habits" />
          <TextField label="Date" />
          <TextField label="Outcome" />
        </FormControl>
        <Button variant="outlined" aria-label="add" sx={{ mr: "3em" }}>
          <Add />
        </Button>
      </Box>
    </>
  );
}
