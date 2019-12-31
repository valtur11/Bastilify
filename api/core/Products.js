const db = require('../models/db')

async function retrieveProducts (filter = {}) {
  try {
    const res = await db.Product.find(filter)
    return res
  } catch (err) {
    return err
  }
}

/* async function retrieveProduct (filter = {}) {
  try {
    const res = await db.Product.findOne(filter)
    return res
  } catch (err) {
    return err
  }
} */

async function createProduct (item) {
  // only test whether works. this code must be in controllers folder and .post must have middleware before this
  const res = await db.Product.create({
    price: item.price || 1,
    quantity: item.quantity || 1,
    id: item.id || new Date().getMilliseconds(),
    name: item.name || 'Example',
    itemShortDescription: item.itemShortDescription || 'Amazing product',
    itemFullDescription: item.itemFullDescription || 'Our product has all the features you need! 4567890 Customers already purchased this item. You, yes You, can take part in this unbeliviable amount of our people!'
  }, (err, data) => {
    if (err) throw err
    return data
  })
  return res
}
/*
async function updateProduct
async function removeProduct
*/

module.exports = { retrieveProducts, createProduct }
