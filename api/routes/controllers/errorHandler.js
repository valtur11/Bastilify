const debug = require('debug')('errorHandler')

function errorHandler (err, req, res, next) {
  const error = {
    message: err.message || 'Oops! Something went wrong.',
    status: err.status
  }
  // if NODE_ENV is set to development
  if (process.env.NODE_ENV === 'development') {
    debug(err.stack) // err details only for development mode
    error.details = err.stack
  }
  return res.status(err.status || 500).json({
    error
  })
}

module.exports = errorHandler
