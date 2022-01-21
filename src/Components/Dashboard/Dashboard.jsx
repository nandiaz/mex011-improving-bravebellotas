import SideBar from "./SideBar/SideBar";
import CurrentGoal from "./CurrentGoal";
import CareerAmbition from "./CareerAmbition";
import CommitmentsTable from "./CommitmentsTable/CommitmentsTable"; 

export default function Dashboard() {
  return (
    <>
      <SideBar />
      <CareerAmbition />
      <CurrentGoal />
      <CommitmentsTable /> 
    </>
  );
}
