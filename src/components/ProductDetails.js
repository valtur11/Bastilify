import React, { Component } from 'react'

class ProductDetails extends Component {
  render () {
    const product = this.props.location.product
    return (<><p>{product.content[0].title}</p></>)
    /* let keys = ['Loading', 'Please, wait']
    if (products[0] !== undefined) { keys = Object.keys(products[0]) }
    keys.map((val, i) => <th key={i}>{val}</th>) */
    // const price = <p>{`${val.price.value} ${val.price.currency}`}</p>
    /* const content = val.content.map(item => (
        <div key={item._id}>
          <p>{item.lang}</p>
          <p>{item.title}</p>
          <p>{item.shortDescription}</p>
          <p>{item.fullDescription}</p>
        </div>
      )) */
    /* <p>{val.targetCountry}</p>
      <p>{val.source}</p>
      <p>{val.isAvailable}</p>
      <p>{val.isVisible}</p>
      <p>{val.condition}</p>
      <p>{val.imageLinks}</p>
      <p>{val.category}</p>
      <p>{val.quantity}</p>
      <p>Link:{val.link}</p>
       <details>{content} {price}</details> */
  }
}

export default ProductDetails
