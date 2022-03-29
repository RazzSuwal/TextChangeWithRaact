
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
}from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
    <Router>

      <Navbar Home="Home" Details="Det" mode={mode} toggleMode={toggleMode} />
      <Routes>
        <Route exact path="/about"
          element = {<About Heading = "About Us" mode ={mode} />}
        />

        <Route exact path="/"
          element = {<TextForm Heading="Convert into UpperCase" mode={mode} />}
        />
      </Routes>
      </Router>

    </>

  );
}

export default App;
