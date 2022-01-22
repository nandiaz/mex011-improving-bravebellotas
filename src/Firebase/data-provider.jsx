/* eslint-disable react-hooks/exhaustive-deps */
/* import { db } from "../../Firebase/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState, useContext, useMemo, createContext } from "react";

export const DataContext = createContext(null);
const initialData = {};

const DataProvider = (props) => {
  const [data, setData] = useState(initialData);

  const onLogout = () => setData(initialData);
  const onChange = (newData) => setData(newData);

  const firestore = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        setData(doc.data());
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    firestore();
  }, [onChange]);

  const dataValue = useMemo(() => ({ ...data, onChange, onLogout }), [data]);

  return <DataContext.Provider value={dataValue} {...props} />;
};

export const useDataContext = () => useContext(DataContext);

export default DataProvider; */
