// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDd84VFgwq5BOrpFt-FkMIFfuaDwA-9eQk",
  authDomain: "react-next-js-10e76.firebaseapp.com",
  databaseURL: "https://react-next-js-10e76-default-rtdb.firebaseio.com",
  projectId: "react-next-js-10e76",
  storageBucket: "react-next-js-10e76.appspot.com",
  messagingSenderId: "52170561340",
  appId: "1:52170561340:web:f92b8b4498a66edfc47039"
};

// Initialize Firebase
export const firebaseConfigApp = initializeApp(firebaseConfig);