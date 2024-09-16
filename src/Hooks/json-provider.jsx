/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useState, useEffect, useContext } from "react";

export const DataContext = createContext(null);

const DataProvider = (props) => {
  const initialData = undefined;
  const [data, setData] = useState(initialData);
  const [selectedPeriod, setSelectedPeriod] = useState();
  const [currentUser, setCurrentUser] = useState("squad@braveBellotas.com");
  const [currentAmbition, setCurrentAmbition] = useState(null);
  const [error, setError] = useState();
  const [trigger, setTrigger] = useState();

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
    setTimeout(() => controller.abort(), 10000);

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
    const ambition = jsonData("https://fake-api-bravebellotas.herokuapp.com/Career-Ambitions", "GET");
    const period = jsonData("https://fake-api-bravebellotas.herokuapp.com/Period", "GET");
    const mainGoal = jsonData("https://fake-api-bravebellotas.herokuapp.com/Main-Goal", "GET");
    const actionPlan = jsonData("https://fake-api-bravebellotas.herokuapp.com/Action-Plan", "GET");
    const areasFocus = jsonData("https://fake-api-bravebellotas.herokuapp.com/Areas-Of-Focus", "GET");
    const accountability = jsonData(
      "https://fake-api-bravebellotas.herokuapp.com/Accountability",
      "GET"
    );
    const plannedPractices = jsonData(
      "https://fake-api-bravebellotas.herokuapp.com/Planned-Deliberate-Practices",
      "GET"
    );
    const practiceLog = jsonData(
      "https://fake-api-bravebellotas.herokuapp.com/Deliberate-Practice-Log",
      "GET"
    );
    const users = jsonData("https://fake-api-bravebellotas.herokuapp.com/users", "GET");
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
    const names = Object.keys(initialRender());
    const infoAll = {};
    Promise.all(Object.values(initialRender()))
      .then((res) => {
        res.forEach((doc, i) => {
          infoAll[names[i]] = doc;
        });
        setData(infoAll);
        return infoAll;
      })
      .catch((err) => {
        console.log(err);
        setError(
          "There was an error retrieving your data, please try again later"
        );
      });
  }, [trigger]);

  useEffect(() => {
    if (data && data !== {}) {
      data.ambition.forEach((info) => {
        if (info.status === true && info.user === currentUser) {
          setCurrentAmbition(info.id);
        }
      })
    }
  },[data])

  const value = {
    data,
    error,
    jsonData,
    onLogout,
    currentUser,
    selectedPeriod,
    setCurrentUser,
    currentAmbition,
    setCurrentAmbition,
    setSelectedPeriod,
    setTrigger
  };
  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);

export default DataProvider;
