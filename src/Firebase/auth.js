import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "./firebase-config";

export function Login (email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}