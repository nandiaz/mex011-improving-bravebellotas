import { Route, Routes } from "react-router-dom";

import Home from "./Components/Home/Home";
import Login from "./Components/Home/Login";
import SignUp from "./Components/Home/SignUp";
import User from "./Components/Dashboard/User";
import Calendar from "./Components/Calendar/Calendar";
import Dashboard from "./Components/Dashboard/Dashboard";
import CurrentGoal from "./Components/Dashboard/CurrentGoal";
import CareerAmbition from "./Components/Dashboard/CareerAmbition";
import EditTable from "./Components/EditCommitment/EditTable/EditTable";
import CommitmentsTable from "./Components/Dashboard/CommitmentsTable/CommitmentsTable";

import "./Components/Styles/App.css";

function App() {
  return (
    <>
        <Routes>
          <Route exact path="/user" element={<User />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/calendar" element={<Calendar />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/edit-table" element={<EditTable />} />
          <Route exact path="*" element={<>404 Page not Found</>} />
          <Route exact path="/current-goal" element={<CurrentGoal />} />
          <Route exact path="/career-ambition" element={<CareerAmbition />} />
          <Route exact path="/commitments-table" element={<CommitmentsTable />} />
          <Route exact path="/" element={<>Improving</>} />
        </Routes>
    </>
  );
}

export default App;
