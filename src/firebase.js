import firebase from "firebase/app"
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCVYAQNjW2YBLsVa_lQGnbadPVVpYjP_k4",
  authDomain: "disney-clone-81ba6.firebaseapp.com",
  projectId: "disney-clone-81ba6",
  storageBucket: "disney-clone-81ba6.appspot.com",
  messagingSenderId: "689850849536",
  appId: "1:689850849536:web:d031e210df84d1f7f27be5",
  measurementId: "G-FM7D804LTY",
};

// Initialize Firebase


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth , provider , storage };
export default db;