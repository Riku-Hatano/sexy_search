import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Exchange from './JSON'

function App() {
  return (
    <div className="App">
      <div>
        <Exchange />
      </div>
    </div>
  );
}

export default App;
