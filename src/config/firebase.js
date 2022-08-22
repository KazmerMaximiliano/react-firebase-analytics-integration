import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
