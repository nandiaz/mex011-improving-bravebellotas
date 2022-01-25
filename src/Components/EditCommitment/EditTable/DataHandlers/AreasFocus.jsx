import { FormControl, TextField, Box, Button } from "@mui/material";
import { Add } from "@mui/icons-material";

const styles = {
  display: "flex",
  flexDirection: "row",
  gap: "20",
  justifyContent: "space-around",
};

export default function AreasFocus() {
  return (
    <>
      <Box sx={{ mt: "1em", width: "80%", ...styles }}>
        <FormControl sx={{ width: "70%", ...styles }}>
                  <TextField label="Areas of Focus" sx={{width:"60%"}}/>
        </FormControl>
        <Button variant="outlined" aria-label="add" sx={{ mr: "3em" }}>
          <Add />
        </Button>
      </Box>
    </>
  );
}
