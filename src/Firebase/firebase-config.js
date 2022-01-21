import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBWorGE0Mqfv3zUQm2O25zEX1rmhjDpa5w",
  authDomain: "improve-hackaton.firebaseapp.com",
  projectId: "improve-hackaton",
  storageBucket: "improve-hackaton.appspot.com",
  messagingSenderId: "537758740892",
  appId: "1:537758740892:web:9269d87b5ff75ff55e5859"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app)
export const db = getFirestore(app);