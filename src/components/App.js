import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar'
import Main from './Main'

class App extends Component {
  render () {
    return (
      <Router>
        <div className='onboarding'>
          <Navbar />
          <Main />
        </div>
      </Router>
    )
  }
}

export default App
