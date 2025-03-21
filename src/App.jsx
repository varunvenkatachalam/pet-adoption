import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'; 
import './App.css'
import About from './Components/about.jsx';
import Login from './Components/Login.jsx';

function App() {

  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  
  )
}

export default App
