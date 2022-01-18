// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/About';
import Card from './components/Card';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
// import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Routes>

        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/card/:user' element={<Card />} />
      </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
