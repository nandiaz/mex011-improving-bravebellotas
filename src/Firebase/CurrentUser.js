import { auth } from "./firebase-config";

export function authUser() {
  return auth.currentUser;
}
