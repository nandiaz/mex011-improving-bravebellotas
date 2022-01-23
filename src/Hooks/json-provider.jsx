/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  createContext,
  useState,
  useEffect,
  useContext,
} from "react";

export const DataContext = createContext(null);

const DataProvider = (props) => {
  const initialData = undefined;
  const [data, setData] = useState(initialData);
  const [editLink, setEditLink] = useState(
    "http://localhost:5000/Career-Ambitions"
  );
  const [selectedPeriod, setSelectedPeriod] = useState("Q1-2022");
  const [currentUser, setCurrentUser] = useState("squad@braveBellotas.com");

  const onLogout = () => setData(initialData);

  const getData = async (url, action, newInfo = false) => {
    const controller = new AbortController();
    const options = {
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newInfo),
      signal: controller.signal,
      method: action,
    };
    if (!newInfo) delete options.body;
    setTimeout(() => controller.abort(), 5000);

    try {
      const allInfo = await (await fetch(url, options)).json();
      const users = await (
        await fetch("http://localhost:5000/users", options)
      ).json();
      const user = Object.assign(
        {},
        ...users.filter((user) => user["email"] === currentUser)
      );
      const currentAmbition = allInfo[user].filter(
        (ambition) => ambition.status === true
      );

      if (user.mentor === false) {
        setData(Object.assign({}, ...currentAmbition));
        // setEditLink(editLink+"?"+currentUser)
      }
      else {
        const padawans = user.padawans;
        setData({
          padawans: allInfo.filter((doc, i) => doc[padawans[i]]),
          userInfo: allInfo[currentUser],
        });
      }
    } catch {
      return null;
    }
  };

  useEffect(() => {
    getData("http://localhost:5000/Career-Ambitions", "GET");
  }, []);

  const value = {
    data,
    getData,
    onLogout,
    setCurrentUser,
    selectedPeriod,
    setSelectedPeriod,
  };
  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);

export default DataProvider;
