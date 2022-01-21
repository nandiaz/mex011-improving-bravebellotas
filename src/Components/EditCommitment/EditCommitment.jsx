import NavBar from "./NavBar";
import EditTable from "./EditTable/EditTable";
import { Box } from "@mui/material";

export default function EditCommitment() {
  return (
    <Box
      component="main"
      sx={{ backgroundColor: "#E0E2E9", minHeight: "100vh", p: 1 }}
    >
      <NavBar />
      <EditTable />
    </Box>
  );
}
