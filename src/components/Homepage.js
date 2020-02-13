import React, { Component } from 'react'
import ProductsList from './ProductsList'
import axios from 'axios'

class Homepage extends Component {
  constructor (props) {
    super(props)
    this.state = { err: null, products: [] }
  }

  componentDidMount () {
    this.fetchProducts()
  }

  fetchProducts () {
    axios.get('https://bastilify-api/api/products')
      .then(res => this.setState({ products: res.data }))
      .catch(err => this.setState({ err: err }))
  }

  render () {
    return (
      <div>
        <h2> Bastilify admin panel</h2>
        <ProductsList products={this.state.products} />
      </div>
    )
  }
}

export default Homepage
