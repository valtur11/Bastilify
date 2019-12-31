const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const apiRouter = express.Router()
const { getProducts, newProduct } = require('./controllers/product')
const newCategory = require('./controllers/category')
const rateLimit = require('express-rate-limit')({ max: 10 })
const errorHandler = require('./controllers/errorHandler')
// Allow this server to all origins
apiRouter.use(cors()) // Warning: Cors MUST be enabled ONLY to whitelist array!!!

// body parser for Content-Type: application/x-www-form-urlencoded; the default Post Content-Type
apiRouter.use(bodyParser.json())

apiRouter
  .route('/products')
  .get(rateLimit, getProducts)
  .post(newProduct) // Add Authorization and rate limit middleware

apiRouter.route('/categories')
  .post(newCategory)

apiRouter.use((req, res, next) => {
  next({ status: 404, message: 'Not Found' })
})

apiRouter.use(errorHandler)

module.exports = apiRouter
