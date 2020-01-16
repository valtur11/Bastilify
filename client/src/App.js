import React from 'react';
import './App.css';
import Navbar from './Navbar.js';
import ContainerTop from './ContainerTop';


function App() {
  return (
    <div>
      <ContainerTop />
      <React.Fragment>
      <Navbar brand="Bastilify" />
      </React.Fragment>
    </div>
  );
}

export default App;
