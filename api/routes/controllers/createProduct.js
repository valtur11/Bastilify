const db = require('../../models/db')

const createProduct = async (req, res, next) => {
  // only test whether works. this code must be in controllers folder and .post must have middleware before this
  await db.Product.create({
    price: req.body.price || 1,
    quantity: req.body.quantity || 1,
    id: req.body.id || new Date().getMilliseconds(),
    name: req.body.name || 'Example',
    itemShortDescription: req.body.itemShortDescription || 'Amazing product',
    itemFullDescription: req.body.itemFullDescription || 'Our product has all the features you need! 4567890 Customers already purchased this item. You, yes You, can take part in this unbeliviable amount of our people!'
  })
  res.json({ price: req.body.price })
}

module.exports = createProduct
