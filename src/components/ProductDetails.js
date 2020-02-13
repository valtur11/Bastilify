import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function ProductDetails (props) {
  const { id } = useParams()
  const [product, setProduct] = useState(props.location.product)
  const [error, setErr] = useState({ message: null })
  console.log('product is', product)

  useEffect(() => {
    if (!product) {
      const url = `http://localhost:8081/api/products?id=${id}`
      axios.get(url)
        .then(res => setProduct(res.data[0]))
        .catch(err => setErr(err))
    }
  })
  const keys = []
  if (product) {
    Object.keys(product).forEach(val => { keys.push(<li>{val}</li>) })
  }
  const body = (product ? (<><p>{product.content[0].title}{keys}</p></>) : (<><h1>Loading...</h1></>))
  return (<> {error.message && <div className='alert alert-danger' role='alert'>{error.message}</div>} {body} </>)
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

export default ProductDetails
