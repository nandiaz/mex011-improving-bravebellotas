import { FormControl, TextField, Box, Button } from "@mui/material";
import { Add } from "@mui/icons-material";

export default function PlannedPractices() {

const styles = {
  display: "flex",
  flexDirection: "row",
  gap: "20",
  justifyContent: "space-around",
};

const inputs = { width: "80%" };

  return (
    <>
      <Box sx={{ mt: "1em", width: "80%", ...styles }}>
        <FormControl sx={{ width: "70%", ...styles }}>
          <TextField label="Action/Practice/Habit" sx={{width:"20em"}} />
          <TextField label="Frequency" sx={{inputs}} />
        </FormControl>
        <Button variant="outlined" aria-label="add" sx={{ mr: "3em" }}>
          <Add />
        </Button>
      </Box>
    </>
  );
}
