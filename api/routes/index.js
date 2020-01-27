const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const apiRouter = express.Router()
const { getRole, applyRoles } = require('./controllers/auth')
const { getProducts, newProduct, updateProduct, deleteProduct } = require('./controllers/product')
const { getCategories, newCategory, updateCategory, deleteCategory } = require('./controllers/category')
// const rateLimit = require('express-rate-limit')({ max: 10 })
const errorHandler = require('./controllers/errorHandler')
// Allow this server to all origins
apiRouter.use(cors()) // Warning: Cors MUST be enabled ONLY to whitelist array!!!

// body parser for Content-Type: application/json; the default Post Content-Type is x-www-form-urlencoded
apiRouter.use(bodyParser.json())

apiRouter.use(getRole, applyRoles)

apiRouter
  .route('/products')
  .get(getProducts) // Get list of products with given filter, empty by default
  .post(newProduct) // Creates new Product (admin) Add Authorization and rate limit middleware

apiRouter
  .route('/products/:id')
  .put(updateProduct) // (admin)
  .delete(deleteProduct) // (admin)

apiRouter.route('/categories')
  .get(getCategories)
  .post(newCategory) // (admin)
  // .route() throws typo err

apiRouter.route('/categories/:_id')
  .put(updateCategory)
  .delete(deleteCategory)

apiRouter.use((req, res, next) => {
  next({ status: 404, message: 'Not Found' })
})

apiRouter.use(errorHandler)

module.exports = apiRouter
