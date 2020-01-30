const db = require('../models/db')

async function createOrder (obj) {
  try {
    const order = await db.Order.create({ ...obj })
    const foundOrder = await db.User.findById(order._id)
    return foundOrder
  } catch (e) {
    return e
  }
}

async function listOrders (obj = {}) {
  try {
    return db.Order.find({ ...obj })
  } catch (e) {
    return e
  }
}

module.exports = { createOrder, listOrders }
