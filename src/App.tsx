import React from 'react';
import { Counter } from './features/counter/Counter';
import {Routes, BrowserRouter, Route, Link} from "react-router-dom"
import './App.css';
import Monster from './Monster'
import Home from './Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/monster" element={<Monster />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
