import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA2XsfpNImpFhW86w6-DiSFHTaURmD7XBI",
  authDomain: "advchat-42759.firebaseapp.com",
  projectId: "advchat-42759",
  storageBucket: "advchat-42759.appspot.com",
  messagingSenderId: "547011648192",
  appId: "1:547011648192:web:7c396572a7f9e059952b25",
  measurementId: "G-DSG1SJ0F1K",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
