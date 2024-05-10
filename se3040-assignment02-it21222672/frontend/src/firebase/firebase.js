// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyA3O6eiT8PYD407vb6rIinrj_LD72RwUJg",
  authDomain: "nasa-project-d3cf2.firebaseapp.com",
  projectId: "nasa-project-d3cf2",
  storageBucket: "nasa-project-d3cf2.appspot.com",
  messagingSenderId: "279546569862",
  appId: "1:279546569862:web:4c81f895d2213744049d07",
  measurementId: "G-MWYWMQM603"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)



export {app , auth};

