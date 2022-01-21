/* eslint-disable react-hooks/exhaustive-deps */
import NavBar from "./NavBar";
import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import EditTable from "./EditTable/EditTable";
import { db } from "../../Firebase/firebase-config";
import { collection, getDocs } from "firebase/firestore";

export default function EditCommitment() {
  const [data, setData] = useState();
  const [newData, setNewData] = useState({});

  // Trial values
  const titles = ["focus", "plan", "practice", "accountablity", "log"];

  const firestore = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        console.log(doc.data())
        setData(doc.data());
        return doc.data()
      });
    } catch (err) {
      console.log(err);
      return(err)
    }
  };

  useEffect(() => {
    firestore();
  }, []);

  return (
    <Box component="main">
      <NavBar />
      {titles.map((title, index) => (
        <EditTable key={title + index} title={title} data={data} setNewData={setNewData} />
      ))}
    </Box>
  );
}
