import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyBUtDNcL9Gm-mwi7G57vlP0n0UpxzCH2S4",
  authDomain: "disneyplus-clone-266fb.firebaseapp.com",
  databaseURL: "https://disneyplus-clone-266fb-default-rtdb.firebaseio.com",
  projectId: "disneyplus-clone-266fb",
  storageBucket: "disneyplus-clone-266fb.appspot.com",
  messagingSenderId: "1046950803974",
  appId: "1:1046950803974:web:e024625229f2634bed2187",
  measurementId: "G-F4JCZKNVWG"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
