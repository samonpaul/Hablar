import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCZJLDedsjGDOXzHCtQT9Ae0CkTgJAnci4",
  authDomain: "messenger-81203.firebaseapp.com",
  projectId: "messenger-81203",
  storageBucket: "messenger-81203.appspot.com",
  messagingSenderId: "845267777651",
  appId: "1:845267777651:web:29c1595957e6efd3b3d206"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
