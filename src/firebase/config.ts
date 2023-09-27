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
  apiKey: process.env.NEXT_PUBLIC_API_KEY || "",
  appId: process.env.NEXT_PUBLIC_APP_ID || "",
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN || "",
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID || "",
  storageBucker: process.env.NEXT_PUBLIC_STORAGE_BUCKET || "",
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID || "",
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID || "",
};

export const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
export const firebaseAuth = getAuth(firebaseApp);
