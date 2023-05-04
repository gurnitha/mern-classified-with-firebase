// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAojmwlKxcYIar6mBCdInMFVOo8W1Hq34A",
  authDomain: "mern-classified-with-firebase.firebaseapp.com",
  projectId: "mern-classified-with-firebase",
  storageBucket: "mern-classified-with-firebase.appspot.com",
  messagingSenderId: "827169150803",
  appId: "1:827169150803:web:03b1f853130b1b508373a6",
  measurementId: "G-ZTB0EJTGYX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);