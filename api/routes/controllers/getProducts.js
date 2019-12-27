const findProducts = require('../../core/Products')

async function getProducts (req, res, next) {
  try {
    const r = await findProducts()
    return res.status(200).json(r)
  } catch (err) {
    return next(err)
  }
}

module.exports = getProducts
