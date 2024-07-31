import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Footer from './Component/Footer';
import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import Stories from './Component/Stories';
import About from './Pages/About';
import Shop from './Pages/Shop';
import Register from './Pages/Register';
import Login from './Pages/Login';

function App() { 
  const [trueLog, setTrueLog] = useState(true);

  if (trueLog) {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/news" element={<Stories />} />
          <Route path="/shop" element={< Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </>
    )

  }

  return (
    <div >
      <Routes>
        <Route path='/login' element = {<Login />} />
        <Route path='/register' element = {<Register />} />
      </Routes>
    </div>
  );
}

export default App;
