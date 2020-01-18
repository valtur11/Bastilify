import React from 'react';
import './App.css';
import Navbar from './Navbar.js';
import ContainerTop from './ContainerTop';
import Products from './Products';


function App() {
  return (
    <div>
      <ContainerTop />
      <React.Fragment>
      <Navbar brand="Bastilify" />
      </React.Fragment>
      <Products />
    </div>
  );
}

export default App;
