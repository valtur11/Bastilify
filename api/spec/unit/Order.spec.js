const {createOrder, listOrder} = require('../../core/Order')

describe('Order', () => { 
  describe('@models', () => {
    it('has to create schema and order model')
  })

  describe('@core', () => {
    it('has to list all orders with given filter', () => {
      const res = listOrder()
      expect(res).toBe(true)
    })
    it('has to create new order', () => {
      pending()
    })
  })

  describe('@controllers', () => {
    it('has to list', () => {
     pending()
    })
    it('has to connect with core', () => {
      pending()
    })
  })
})
