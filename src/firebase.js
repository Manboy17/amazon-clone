import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAf9e9NWS_WH0IQyiWiVAQnurJUpUgv-8w",
  authDomain: "clone-67110.firebaseapp.com",
  projectId: "clone-67110",
  storageBucket: "clone-67110.appspot.com",
  messagingSenderId: "776412817449",
  appId: "1:776412817449:web:69a59e6f99670df2b21438",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
