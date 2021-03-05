const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const apiRouter = express.Router()
const { getOrders, newOrder } = require('./controllers/order')
const { signup, signin, logout, getRole, applyRoles } = require('./controllers/auth')
const { getProducts, newProduct, updateProduct, deleteProduct } = require('./controllers/product')
const { getCategories, newCategory, updateCategory, deleteCategory } = require('./controllers/category')
const debug = require('debug')('routes')
const errorHandler = require('./controllers/errorHandler')
/**
 * All api routes
 * @todo Install and use performance and security modules
 * @todo set CORS whitelist array
 * @todo add additional validation like email vertification
 */
// const rateLimit = require('express-rate-limit')({ max: 10 })

// Allow this server to all origins
apiRouter.use(cors({ credentials: true, origin: 'https://bastilify.herokuapp.com' })) // Warning: Cors MUST be enabled ONLY to whitelist array!!!

// body parser for Content-Type: application/json; the default Post Content-Type is x-www-form-urlencoded
apiRouter.use(bodyParser.json())

apiRouter.use(getRole, applyRoles)

apiRouter
  .route('/products')
  .get(getProducts) // Get list of products with given filter, empty by default
  .post(newProduct) // Creates new Product (admin) Add Authorization and rate limit middleware

apiRouter
  .route('/products/:id')
  .put(updateProduct)
  .delete(deleteProduct)

apiRouter.route('/categories')
  .get(getCategories)
  .post(newCategory)

apiRouter.route('/categories/:_id')
  .put(updateCategory)
  .delete(deleteCategory)

apiRouter.post('/auth/signup', signup)
apiRouter.post('/auth/signin', signin)

apiRouter.get('/auth/logout', logout)

apiRouter.route('/orders')
  .get(getOrders)
  .post(newOrder)

apiRouter.use((req, res, next) => {
  debug('page not exists')
  next({ status: 404, message: 'Not Found' })
})

apiRouter.use(errorHandler)

module.exports = apiRouter
