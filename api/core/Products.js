const db = require('../models/db')

async function retrieveProducts (filter = {}) {
  try {
    const res = await db.Product.find(filter).populate('category')
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
  const product = await db.Product.create({
    price: { value: item.price || 2 },
    category: item.categoryId, // frontend sends category id
    quantity: item.quantity || 1,
    content: [{
      title: item.name || 'Example',
      shortDescription: item.itemShortDescription || 'Amazing product',
      fullDescription: item.itemFullDescription || 'No description'
    }]
  })
  const foundProduct = await db.Product.findById(product._id).populate('category')
  return foundProduct
}
/*
async function updateProduct
async function removeProduct
*/

module.exports = { retrieveProducts, createProduct }
