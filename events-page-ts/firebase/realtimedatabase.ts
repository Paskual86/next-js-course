import { getDatabase } from "firebase/database";
import { firebaseConfigApp } from "./firebaseconfig";

export const databases = getDatabase(firebaseConfigApp)