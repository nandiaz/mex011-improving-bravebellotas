/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useState, useEffect, useContext } from "react";

export const DataContext = createContext(null);

const DataProvider = (props) => {
  const initialData = undefined;
  const [data, setData] = useState(initialData);
  const [selectedPeriod, setSelectedPeriod] = useState("Q1-2022");
  const [currentUser, setCurrentUser] = useState("squad@braveBellotas.com");
  const [error, setError] = useState();

  const onLogout = () => setData(initialData);

  const jsonData = async (url, action = "GET", newInfo = false) => {
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
      const endpointInfo = await (await fetch(url, options)).json();
      if (!endpointInfo) setError("There was an error, please try again");
      return endpointInfo;
    } catch {
      setError("There was an error, please try again");
      return null;
    }
  };

  const initialRender = () => {
    const ambition = jsonData("http://localhost:5000/Career-Ambitions", "GET");
    const period = jsonData("http://localhost:5000/Period", "GET");
    const mainGoal = jsonData("http://localhost:5000/Main-Goal", "GET");
    const actionPlan = jsonData("http://localhost:5000/Action-Plan", "GET");
    const areasFocus = jsonData("http://localhost:5000/Areas-Of-Focus", "GET");
    const accountability = jsonData(
      "http://localhost:5000/Accountability",
      "GET"
    );
    const plannedPractices = jsonData(
      "http://localhost:5000/Planned-Deliberate-Practices",
      "GET"
    );
    const practiceLog = jsonData(
      "http://localhost:5000/Deliberate-Practice-Log",
      "GET"
    );
    const users = jsonData("http://localhost:5000/users", "GET");
    return {
      ambition,
      period,
      mainGoal,
      actionPlan,
      areasFocus,
      accountability,
      plannedPractices,
      practiceLog,
      users,
  };
  };

  useEffect(() => {
    const names = Object.keys(initialRender())
    const infoAll = {}
    Promise.all(Object.values(initialRender()))
      .then((res) => {
        res.forEach((doc, i) => {
          infoAll[names[i]] = doc;
        })
        setData(infoAll)
        return infoAll
      })
      .catch((err) => {
        console.log(err);
        setError("There was an error retrieving your data, please try again later");
      });
  }, []);

  

 



  const value = {
    data,
    error,
    jsonData,
    onLogout,
    currentUser,
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
