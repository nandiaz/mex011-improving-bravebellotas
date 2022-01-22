/* eslint-disable react-hooks/exhaustive-deps */
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase-config";
import { useEffect, useState, useContext, createContext } from "react";
import { authUser } from "./CurrentUser";

export const FirestoreContext = createContext(null);

const FirestoreProvider = (props) => {
  const initialData = false;
  const initialUser = false;
  const [data, setData] = useState();
  const [currentUser, setCurrentUser] = useState();

  const getFirestore = async () => {
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

  const editFirestore = async (docId, changes) => {
    const userRef = doc(db, "users", docId);
    await updateDoc(userRef, {
      changes,
    });
  };

  const deleteFirestore = async (id) => {
    try {
      if (window.confirm("Deseas eliminar la información")) {
        await deleteDoc(doc(db, "users", id));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onLogout = () => setData(initialData);

  useEffect(() => {
    /*
    if (authUser()) */ getFirestore();
    /* else {
      setData(initialData);
      setCurrentUser(initialUser);
    } */
  }, []);

  const value = {
    data,
    editFirestore,
    deleteFirestore,
    onLogout,
  };
  return (
    <FirestoreContext.Provider value={value}>
      {props.children}
    </FirestoreContext.Provider>
  );
};

export const useFirestoreContext = () => useContext(FirestoreContext);

export default FirestoreProvider;
