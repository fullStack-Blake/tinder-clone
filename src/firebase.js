import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCrFDQDXzOaDeyajabdC7PV98vHC-aQnZI",
  authDomain: "tinder-clone-f1028.firebaseapp.com",
  databaseURL: "https://tinder-clone-f1028.firebaseio.com",
  projectId: "tinder-clone-f1028",
  storageBucket: "tinder-clone-f1028.appspot.com",
  messagingSenderId: "423470129318",
  appId: "1:423470129318:web:505579ee07c9edca14d467",
  measurementId: "G-VLVRCH9P80"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
