import React from 'react';
import './App.css';
import { Title, Logo } from './components';

function App() {
  return (
    <div className="App">
      <header>
        <Logo>
        <img src='./OctoCatLogo.png' className="App-logo" alt="logo" />
          <Title>Github War</Title>
        </Logo>
      </header>
    </div>
  );
}

export default App;
