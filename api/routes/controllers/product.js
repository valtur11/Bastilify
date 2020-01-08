const { retrieveProducts, createProduct } = require('../../core/Products')

// r is result

async function getProducts (req, res, next) {
  try {
    const r = await retrieveProducts()
    return res.status(200).json(r)
  } catch (err) {
    return next(err)
  }
}

const newProduct = async (req, res, next) => {
  // only for test; this POST must have middleware before this to ensure the user is logged in admin
  try {
    const r = await createProduct(req.body)
    res.json(r)
  } catch (err) {
    return next(err)
  }
}

module.exports = { getProducts, newProduct }
