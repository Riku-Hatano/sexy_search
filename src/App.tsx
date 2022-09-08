import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Monster from './JSON'
import Home from './Home'

function App() {
  return (
    <div className="App">
      <div>
        <Home />
        <Monster />
      </div>
    </div>
  );
}

export default App;
