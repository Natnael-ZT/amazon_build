import firebase from "firebase";

// import { initializeApp } from 'firebase/app';
// import { getFirestore} from 'firebase/firestore';
// import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBYRv2pVHndItNPcm7BWGPN0PQ0JEQ5Ojs",
  authDomain: "build-dfdda.firebaseapp.com",
  projectId: "build-dfdda",
  storageBucket: "build-dfdda.appspot.com",
  messagingSenderId: "204944279851",
  appId: "1:204944279851:web:763676d8b810f0b91bdd6e"
};

// const firebaseApp = initializeApp(firebaseConfig);
const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = getFirestore(firebaseApp);
const db = (firebaseApp).firestore();

// const auth = getAuth(firebaseApp);
const auth = firebase.auth();

export { db, auth };


// commented is firebase version 12 code
