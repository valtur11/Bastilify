const db = require('../models/db')
const debug = require('debug')('core:Order')

async function createOrder (obj) {
  debug('order')
  const order = await db.Order.create(obj)
  const foundOrder = await db.Order.findById(order._id)
  return foundOrder
}

async function listOrders (obj = {}) {
  try {
    return db.Order.find({ ...obj })
  } catch (e) {
    return e
  }
}

module.exports = { createOrder, listOrders }
