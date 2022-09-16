import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = ({
    apiKey: "AIzaSyChH7TlBwhS7DAmiHH0H5qqIcMF0Nt5BkY",
    authDomain: "messanger-clone-3ffa5.firebaseapp.com",
    projectId: "messanger-clone-3ffa5",
    storageBucket: "messanger-clone-3ffa5.appspot.com",
    messagingSenderId: "1004284038846",
    appId: "1:1004284038846:web:9f4305c4d33075589b98ef",
    measurementId: "G-1PEL372N4H"
})

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export const auth = getAuth(app)
export {db}