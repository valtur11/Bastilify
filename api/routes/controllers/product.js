const { retrieveProducts, createProduct, changeProduct, removeProduct } = require('../../core/Products')

/**
 * Gets array of product objects from core
 * @param {*} req express request object
 * @param {*} res express response object
 * @param {*} next express next middleware object
 * @prop req.body.limit limitation based on the given role
 * @prop r response data
 * @todo apply users, limit and filter response based on roles
 * @returns {Object} if no err then it returns the retrieved data
 */
async function getProducts (req, res, next) {
  try {
    const r = await retrieveProducts()
    return res.status(200).json(r)
  } catch (err) {
    return next(err)
  }
}

/**
 * Creates new product with given params
 * @param {*} req express default
 * @param {*} res express default
 * @param {*} next express default
 * @todo this POST must have middleware before this to ensure the user is logged in admin
 * @returns {Object} if no err then it returns the new data
 */
const newProduct = async (req, res, next) => {
  try {
    const r = await createProduct(req.body)
    res.json(r)
  } catch (err) {
    return next(err)
  }
}

/**
 * Changes product with given object parameters
 * @param {*} req express default
 * @param {*} res express default
 * @param {*} next express default
 * @prop req.body change object
 * @prop req.body._id id of changed object
 * @returns {Object} if no err then it returns the new data
 */
const updateProduct = async (req, res, next) => {
  try {
    req.body._id = req.params.id
    const r = await changeProduct(req.body)
    res.json(r)
  } catch (err) {
    return next(err)
  }
}

/**
 * Removes product with given id
 * @param {*} req express default
 * @param {*} res express default
 * @param {*} next express default
 * @prop req.body request object with id
 * @prop req.body._id id of changed object
 * @returns {Object} if no err then it returns the removed data
 */
const deleteProduct = async (req, res, next) => {
  try {
    req.body._id = req.params.id
    console.log(req.body)
    const r = await removeProduct(req.body)
    res.json(r)
  } catch (err) {
    return next(err)
  }
}

module.exports = { getProducts, newProduct, updateProduct, deleteProduct }
