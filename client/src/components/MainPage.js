import React from 'react';
import Navbar from './Navbar.js';
import Home from './Home.js'
import Footer from './Footer.js';

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <Navbar />
        <Home />
        <Footer />
      </div>
    )
  }
}

export default App