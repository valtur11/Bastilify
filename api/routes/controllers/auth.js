// require('dotenv').load()
const jwt = require('jsonwebtoken')

/**
 * Login required midddleware
 * @param {*} req express req object
 * @param {*} res express res object
 * @param {*} next express next middleware
 */
exports.loginRequired = function (req, res, next) {
  try {
    const token = req.headers.authorization.split(' ')[1]
    jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
      if (err) throw err
      if (decoded) {
        console.log(decoded)
        next()
      } else {
        return next({ status: 401, message: 'Please Log In First' })
      }
    })
  } catch (e) {
    return next({ status: 401, message: 'Please Log In First' })
  }
}

/* ensureCorrectUser = function (req, res, next) {
  try {
    const token = req.headers.authorization.split(' ')[1]
    jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
      if (decoded && decoded.id === req.params.id) {
        return next()
      } else {
        return next({ status: 401, message: 'Unauthorized' })
      }
    })
  } catch (e) {
    return next({ status: 401, message: 'Unauthorized' })
  }
} */
/**
 * Apply roles to req.body and ensure the role
 * @param {*} req request object
 * @param {*} res response object
 * @param {*} next next middleware
 *//*
function applyRoles (req, res, next) {
  try {
    const token = req.headers.authorization.split(' ')[1]
    jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
      if (err) throw err
      if (decoded) {
        next()
      } else {
      }
    })
  } catch (e) {
    return next({ status: 400, message: 'Bad request' })
  }
}
*/
/* ensureCorrectUser */

// module.exports = { applyRoles }
