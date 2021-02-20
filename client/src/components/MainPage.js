import React from 'react';
import Home from './Home.js'
import Footer from './Footer.js';

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <Home />
        <Footer />
      </div>
    )
  }
}

export default App