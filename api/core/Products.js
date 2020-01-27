const db = require('../models/db')
const debug = require('debug')('core:Products')
/**
 * Retrieves all products with given filter from the db
 * @param {*} filter filter products results
 */
async function retrieveProducts (filter = {}) {
  try {
    debug('start')
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

/**
 * Creates new document
 * @param {*} item product object
 */
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

/**
 * Changes product
 * @param {*} obj product object
 */
async function changeProduct (obj) {
  await db.Product.updateOne({ _id: obj._id }, obj)
  const foundProduct = await db.Category.findById(obj._id)
  return foundProduct
}

/**
 * Removes product
 * @param {*} obj product object with the id
 */
async function removeProduct (obj) {
  const foundProduct = await db.Product.findById(obj._id)
  foundProduct.remove()
  return foundProduct
}

module.exports = { retrieveProducts, createProduct, changeProduct, removeProduct }
