import { FormControl, TextField, Box, Button } from "@mui/material";
import { Add } from "@mui/icons-material";

const styles = {
  display: "flex",
  flexDirection: "row",
  gap: "20",
  justifyContent: "space-around",
};

const inputs = { width: "40%" };

export default function Accountability() {
  return (
    <>
      <Box sx={{ mt: "1em", width: "80%", ...styles }}>
        <FormControl sx={{ width: "70%", ...styles }}>
          <TextField label="Contact" sx={{inputs}} />
          <TextField label="Frequency" sx={{inputs}} />
          <TextField label="Via" sx={{inputs}} />
        </FormControl>
        <Button variant="outlined" aria-label="add" sx={{ mr: "3em" }}>
          <Add />
        </Button>
      </Box>
    </>
  );
}
