import { Route, Routes } from "react-router-dom";

import Login from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import EditTable from "./Components/EditCommitment/EditCommitment";

import "./Components/Styles/App.css";

function App() {
  return (
    <>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<Dashboard/>} />
          <Route exact path="/edit-commitment" element={<EditTable />} />
          <Route exact path="*" element={<>404 Page not Found</>} />
        </Routes>
    </>
  );
}

export default App;
