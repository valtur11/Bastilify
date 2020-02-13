import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Button, Item, Icon } from 'semantic-ui-react'

class ProductsList extends Component {
  render () {
    const products = this.props.products
    const items = products.map(val => {
      val.category = { title: 'laptops' }
      return (
        <Item key={val._id}>
          <Item.Image src='https://i.pinimg.com/originals/23/6e/88/236e881c6fa2a21a2312ec9cd3415d67.png' size='small' />
          <Item.Content>
            <Item.Header as='a'>
              {val.content[0].title}
            </Item.Header>
            <Item.Description>
              <p>{val.content[0].shortDescription}</p>
            </Item.Description>
            <Item.Meta>
              <Link
                to={{
                  pathname: `/products/${val.category.title}/${val._id}`,
                  product: val
                }}
              > <Icon name='edit' />
              </Link>
              <Button> <Icon name='delete' /> </Button>
            </Item.Meta>
            <Item.Extra>{val.price.value} {val.price.currency}</Item.Extra>
          </Item.Content>
        </Item>
      )
    })

    return (
      <Container text>
        <h3>List of products</h3>
        <Item.Group>
          {items}
        </Item.Group>
      </Container>
    )
  }
}

export default ProductsList
