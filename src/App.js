import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';

import Home from './pages/Home';

import './App.css';
import About from './pages/About';
import Visions from './pages/Vision';
import Products from './pages/Products';
import Contacts from './pages/Contacts';


function App() {
    return (
      <div className="App">
                <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path='/about' element ={<About />}></Route>
        <Route path='/vision' element ={<Visions />}></Route>
        <Route path='/products' element ={<Products />}></Route>
        <Route path='/contact' element ={<Contacts />}></Route>
      </Routes>
    </div>

  );
}

export default App;
