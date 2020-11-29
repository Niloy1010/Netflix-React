import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA51DKWIe0gUIKPJgS97fWA1pnP-QHuDvU",
  authDomain: "netflix-react-e3f82.firebaseapp.com",
  databaseURL: "https://netflix-react-e3f82.firebaseio.com",
  projectId: "netflix-react-e3f82",
  storageBucket: "netflix-react-e3f82.appspot.com",
  messagingSenderId: "950589735051",
  appId: "1:950589735051:web:832eb47da8e4cdf868d48e",
  measurementId: "G-WCFH8K1N91",
};

const firebase = Firebase.initializeApp(config);


export { firebase };
