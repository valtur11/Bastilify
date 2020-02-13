import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render () {
    return (
      <div>
        <h2>Navbar <span><Link to='/products/new'>New product</Link></span></h2>
      </div>
    )
  }
}

export default Navbar
