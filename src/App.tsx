import React from 'react';
import { Counter } from './features/counter/Counter';
import {Routes, BrowserRouter, Route, Link} from "react-router-dom"
import './App.css';
import Monster from './page_tsx/Monster'
import Spell from './page_tsx/Spell'
import Archetypes from './page_tsx/Archetypes'
import Home from './page_tsx/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/monster" element={<Monster />} />
        <Route path="/spell" element={<Spell />} />
        {/* <Route path="/archetypes" component={Archetypes} /> */}
        <Route path="archetypes/:archetype" element={<Archetypes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
