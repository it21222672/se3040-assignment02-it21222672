import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from "./components/Home";
import NasaPhoto from "./components/NasaPhoto";
import Signup from "./components/signup";
import Mars from "./components/Mars";
import Login from "./components/login";
import Homemain from "./components/homemain";
import LandsatImagery from './components/LandsatImagery';
import firebase from 'firebase/compat/app';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
          setIsLoggedIn(true);
      } else {
          setIsLoggedIn(false);
      }
  });
}, []);

  return (
    <Router>
      <div>
        <Routes>
          <Route element={<Home />} path="/" exact />
          <Route element={<Homemain />} path="/homemain" />
          <Route element={<NasaPhoto />} path="/NasaPhoto" />
          <Route element={<Signup />} path="/signup" />
          <Route element={<Login />} path="/login" />
          <Route element={<Mars />} path="/mars" />
          <Route element={<LandsatImagery />} path="/landsatimagery" />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
