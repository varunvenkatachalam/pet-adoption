import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'; 
import './App.css'
import About from './Components/about.jsx';
import Landing from './Components/landingPage.jsx';
import Navbar from './Components/navbar.jsx';
// import Login from './Components/login.jsx';

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>

        <Route path="/" element={<Landing/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </Router>
  
  )
}

export default App
