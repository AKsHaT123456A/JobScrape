// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOBiP3igSCTNviSmOURQBVJ6wZF9YD4T8",
  authDomain: "vidutopia-2049b.firebaseapp.com",
  projectId: "vidutopia-2049b",
  storageBucket: "vidutopia-2049b.appspot.com",
  messagingSenderId: "1037044873225",
  appId: "1:1037044873225:web:dfc2936c4cb589d1d760d8",
  measurementId: "G-J4VXPNK01M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);