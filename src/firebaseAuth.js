// import firebase from "firebase/app";
// import "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyDgLNJTenRCaWcJUFODOXl8cYZoB15r9Qk",
//   authDomain: "ps-web-8e785.firebaseapp.com",
//   projectId: "ps-web-8e785",
//   storageBucket: "ps-web-8e785.appspot.com",
//   messagingSenderId: "870251518957",
//   appId: "1:870251518957:web:25436546efe72388a8a5e4",
// };

// firebase.initializeApp(firebaseConfig);
// const auth = firebase.auth();

// export default auth;
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyDgLNJTenRCaWcJUFODOXl8cYZoB15r9Qk",
  authDomain: "ps-web-8e785.firebaseapp.com",
  projectId: "ps-web-8e785",
  storageBucket: "ps-web-8e785.appspot.com",
  messagingSenderId: "870251518957",
  appId: "1:870251518957:web:25436546efe72388a8a5e4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;
