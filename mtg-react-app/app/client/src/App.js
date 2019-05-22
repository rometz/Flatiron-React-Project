import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <AppRouter />
      </header>
    </div>
  );
}

export default App;
