import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar'
import Main from './Main'
import Footer from './Footer'

class App extends Component {
  render () {
    return (
      <Router>
        <Navbar />
        <Main />
        <Footer />
      </Router>
    )
  }
}

export default App
