import { FormControl, TextField, Box, Fab } from "@mui/material";
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
        <Fab color="primary" aria-label="add" sx={{ mr: "3em" }}>
          <Add />
        </Fab>
      </Box>
    </>
  );
}
