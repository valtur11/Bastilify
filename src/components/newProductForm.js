import React, { Component } from 'react'
import axios from 'axios'

class newProductForm extends Component {
  constructor (props) {
    super(props)
    this.state = { title: '', shortDescription: '', fullDescription: '', category: '', price: '' }
  }
  
  componentDidMount () {
    axios.get('')
  }

  render () {
    const { title, shortDescription, fullDescription, category, price } = this.state
    const heading = 'Sell new product. Start here.'

    return (
      <>
        <div className='row justify-content-md-center text-center'>
          <div className='col-md-6'>
            <form onSubmit={this.handleSubmit}>
              <h2>{heading}</h2>
              <label htmlFor='title'>Title</label>
              <input
                autoComplete='off'
                className='form-control'
                name='title'
                onChange={this.handleChange}
                type='text'
                value={title}
              />
              <label htmlFor='price'>Price (USD)</label>
              <input
                autoComplete='off'
                className='form-control'
                name='price'
                onChange={this.handleChange}
                type='text'
                value={price}
              />
              <label htmlFor='shortDescription'>Short Description</label>
              <textarea name='shortDescription' value={shortDescription} onChange={this.handleChange} />
              <label htmlFor='fullDescription'>Short Description</label>
              <textarea name='fullDescription' value={fullDescription} onChange={this.handleChange} />
              <label htmlFor='category'>Choose category</label>
              <select name='category'>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option selected value="coconut">Coconut</option>
                <option value="mango">Mango</option>
              </select>

              <button
                type='submit'
                className='bn btn-primary btn-block btn-lg'
              >
                  Add this product to the list
              </button>
              <button
                type='button'
                className='bn btn-danger btn-block btn-lg'
                onClick={this.handleCancel}
              >
                 Cancel
              </button>
            </form>
          </div>
        </div>
      </>
    )
  }
}

export default newProductForm
