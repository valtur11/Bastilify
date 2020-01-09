const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const apiRouter = express.Router()
const { getProducts, newProduct } = require('./controllers/product')
const { getCategories, newCategory, updateCategory, deleteCategory } = require('./controllers/category')
const rateLimit = require('express-rate-limit')({ max: 10 })
const errorHandler = require('./controllers/errorHandler')
// Allow this server to all origins
apiRouter.use(cors()) // Warning: Cors MUST be enabled ONLY to whitelist array!!!

// body parser for Content-Type: application/json; the default Post Content-Type is x-www-form-urlencoded
apiRouter.use(bodyParser.json())

apiRouter
  .route('/products')
  .get(rateLimit, getProducts) // Get list of products with given filter, empty by default
  .post(newProduct) // Creates new Product (admin) Add Authorization and rate limit middleware
  // .route('/:id')
  /*
    .get(getProduct) //Get specific product
    .put(updateProduct) // (admin)
    .delete(deleteProduct) // (admin)
  */

apiRouter.route('/categories') // (admin)
  .get(getCategories)
  .post(newCategory)
  // .route() throws typo err

apiRouter.route('/categories/:_id')
  .put(updateCategory)
  .delete(deleteCategory)

apiRouter.use((req, res, next) => {
  next({ status: 404, message: 'Not Found' })
})

apiRouter.use(errorHandler)

module.exports = apiRouter
