import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyC7BXax9VJQ6zRjS2eHKCrdcy4STIokrsk",
    authDomain: "goldenduck-553f1.firebaseapp.com",
    projectId: "goldenduck-553f1",
    databaseURL: "https://goldenduck.firebaseio.com",
    storageBucket: "goldenduck-553f1.appspot.com",
    messagingSenderId: "152570010852",
    appId: "1:152570010852:web:74c69a9033ef58b637a0f1",
    measurementId: "G-1ZSZWSTQBF"
};

const app = initializeApp(firebaseConfig);
// for db
export const db = getFirestore(app);
// for images 
export const storage = getStorage();
export default app;