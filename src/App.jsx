import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'; 
import './App.css'
import About from './Components/about.jsx';

function App() {

  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<About />} />
      </Routes>
    </Router>
  
  )
}

export default App
