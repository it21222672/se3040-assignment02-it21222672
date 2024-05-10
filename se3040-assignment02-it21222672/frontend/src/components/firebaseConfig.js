// Import the functions you need from the SDKs you need
import 'firebase/compat/auth';
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';

import 'firebase/compat/database';

import { auth } from './firebaseConfig';
const firebaseConfig = {
  apiKey: "AIzaSyA3O6eiT8PYD407vb6rIinrj_LD72RwUJg",
  authDomain: "nasa-project-d3cf2.firebaseapp.com",
  projectId: "nasa-project-d3cf2",
  storageBucket: "nasa-project-d3cf2.appspot.com",
  messagingSenderId: "279546569862",
  appId: "1:279546569862:web:4c81f895d2213744049d07",
  measurementId: "G-MWYWMQM603"
};


const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app