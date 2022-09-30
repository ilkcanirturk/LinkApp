import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAmFrA7DMuBkk2pPCBzBKPaTvglmjbLSMY",
  authDomain: "linkapp-596e3.firebaseapp.com",
  projectId: "linkapp-596e3",
  storageBucket: "linkapp-596e3.appspot.com",
  messagingSenderId: "545981980985",
  appId: "1:545981980985:web:0f88e8278f3b9899b848e8",
  measurementId: "G-RZ4P6X1K50",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
