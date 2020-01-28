// require('dotenv').load()
const jwt = require('jsonwebtoken')
const fs = require('fs')
const debug = require('debug')('auth')

/**
 * Login required midddleware
 * @param {*} req express req object
 * @param {*} res express res object
 * @param {*} next express next middleware
 * @prop {String} req.headers.authorization jwt auth token if undefined it throws new Guest error
 */
const getRole = function (req, res, next) {
  try {
    if (req.headers.authorization === undefined) throw new Error('Guest')
    const token = req.headers.authorization.split(' ')[1]
    jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
      if (err) throw err
      if (decoded) {
        req.role = decoded.role
        next()
      } else {
        // the token is not correct
        return next({ status: 401, message: 'Please Log In First' })
      }
    })
  } catch (e) {
    if (e.message === 'Guest') {
      req.role = { name: e.message, level: 0 }
      return next()
    }
    return next(e)
  }
}

/**
 * Checks for permission demanding on roles.json
 * @param {*} req express default request
 * @param {*} res express default response
 * @param {*} next express default next middleware
 * @prop {Object} d JSON parsed data from the file roles.json
 * @prop {Object} d[0] Guest role
 * @prop {Object} d[i].name name of the role
 * @prop {Object} d[i].actions array of permitted actions for the role
 * @prop {Object} d[i].actions[i][0] action method
 * @prop {Object} d[i].actions[i][1] action path
 * @todo Implement logic for the rest of the roles
 */
const applyRoles = function (req, res, next) {
  try {
    fs.readFile('./config/roles.json', 'utf8', async (err, data) => {
      const d = JSON.parse(data)
      if (err) throw err
      const foundRole = d.find(val => val.actions.find(action => action[0].toUpperCase() === req.method && action[1] === req.originalUrl) !== undefined)
      if (foundRole) {
        if (foundRole.level <= req.role.level) {
          next()
        } else {
          debug('foundRole level is bigger than the req role level')
          switch (req.role.name) {
            case 'Guest': next({ status: 401, message: 'Please login first' }); break
            default: next({ status: 403, message: 'Access denied' })
          }
        }
      } else {
        return next({ status: 404, message: 'Not found' })
      }
    })
  } catch (e) {
    return next(e)
  }
}

module.exports = { getRole, applyRoles }