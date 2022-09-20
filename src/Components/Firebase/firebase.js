import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
// import "firebase/auth"
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD2DWCF1NslEq9RF2s_OfD3IOHEqRT6VaM",
    authDomain: "mymovies-fa9f9.firebaseapp.com",
    projectId: "mymovies-fa9f9",
    storageBucket: "mymovies-fa9f9.appspot.com",
    messagingSenderId: "78405152211",
    appId: "1:78405152211:web:7196495c2a54f08e435326",
    measurementId: "G-VYSD9JZ9EZ"
};

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app);
// export const signInWithEmailAndPassword = 
export const db = getFirestore(app);
