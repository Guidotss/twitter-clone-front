import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";

interface FirebaseConfig {
  apiKey: string;
  appId: string;
  authDomain: string;
  projectId: string;
  storageBucker: string;
  messagingSenderId: string;
  measurementId: string;
}

const firebaseConfig: FirebaseConfig = {
  apiKey: process.env.API_KEY || "",
  appId: process.env.APP_ID || "",
  authDomain: process.env.AUTH_DOMAIN || "",
  projectId: process.env.PROJECT_ID || "",
  storageBucker: process.env.STORAGE_BUCKET || "",
  messagingSenderId: process.env.MESSAGING_SENDER_ID || "",
  measurementId: process.env.MEASUREMENT_ID || "",
};

export const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
export const firebaseAuth = getAuth(firebaseApp);
