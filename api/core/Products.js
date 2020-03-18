const db = require('../models/db')
const debug = require('debug')('core:Products')

const products = (productModel, categoryModel) => {
  return {
    /**
     * Retrieves all products with given filter from the db
     * @param {*} filter filter products results
     */
    async retrieve (filter = {}) {
      try {
        debug('start')
        const res = await productModel.find(filter).populate('category')
        return res
      } catch (err) {
        return err
      }
    },
    /**
 * Creates new document
 * @param {*} item product object
 * @todo Write try catch block
 */
async create (item) {
  const product = await productModel.create({
    price: { value: item.price || 2 },
    category: item.categoryId, // frontend sends category id
    quantity: item.quantity || 1,
    content: [{
      title: item.name || 'Example',
      shortDescription: item.itemShortDescription || 'Amazing product',
      fullDescription: item.itemFullDescription || 'No description'
    }]
  })
  const foundProduct = await productModel.findById(product._id).populate('category')
  return foundProduct
},

/**
 * Changes product
 * @param {*} obj product object
 * @todo Write try catch block
 */
async change (obj) {
  await productModel.updateOne({ _id: obj._id }, obj)
  const foundProduct = await categoryModel.findById(obj._id)
  return foundProduct
},

/**
 * Removes product
 * @param {*} obj product object with the id
 * @todo Write try catch block
 */
async remove (obj) {
  const foundProduct = await productModel.findById(obj._id)
  foundProduct.remove()
  return foundProduct
}
  }
}

const product = products(db.Product, db.Category)
const retrieveProducts = product.retrieve, createProduct = product.create, changeProduct = product.change, removeProduct = product.remove

module.exports = { retrieveProducts, createProduct, changeProduct, removeProduct }
