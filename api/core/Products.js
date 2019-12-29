const db = require('../models/db')

async function findProducts (filter = {}) {
  try {
    const res = await db.Product.find(filter)
    return res
  } catch (err) {
    return err
  }
}

module.exports = findProducts
