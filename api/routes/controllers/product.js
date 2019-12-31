const { retrieveProducts, createProduct } = require('../../core/Products')

async function getProducts (req, res, next) {
  try {
    const r = await retrieveProducts()
    return res.status(200).json(r)
  } catch (err) {
    return next(err)
  }
}

const newProduct = async (req, res, next) => {
  // only for test; this POST must have middleware before this
  try {
    const r = await createProduct(req.body)
    res.json(r)
  } catch (err) {
    return next(err)
  }
}

module.exports = { getProducts, newProduct }
