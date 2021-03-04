// require('dotenv').load()
const jwt = require('jsonwebtoken')
const fs = require('fs')
const debug = require('debug')('auth')
const { findUser, createUser } = require('../../core/User')

/**
* User register
 * @name signup
 */
async function signup (req, res, next) {
  try {
    const user = await createUser(req.body)
    if (user instanceof Error) {
      debug('user is error')
      throw new Error(user.message)
    }
    const { id, username, profileImgUrl, email } = user
    debug(id, username, profileImgUrl)
    const maxAge = 1 * 24 * 60 * 60;
    const token = jwt.sign(
      {
        id,
        username,
        profileImgUrl,
        email
      },
      process.env.JWT_SECRET,
      { 
        expiresIn: maxAge 
      }
    )
    res.cookie('jwt', token, { maxAge: maxAge * 1000 });
    return res.status(201).json({
      id,
      username,
      profileImgUrl,
      email,
      token
    })
  } catch (e) {
    return next({
      status: 400,
      message: e.message
    })
  }
}

/**
 * User login
 * @name signin
 */
async function signin (req, res, next) {
  try {
    const user = await findUser(req.body)
    const { id, username, profileImgUrl, email } = user
    const isMatch = user.comparePassword(req.body.password)
    if (isMatch) {
      const maxAge = 1 * 24 * 60 * 60;
      const token = jwt.sign(
        {
          id,
          username,
          profileImgUrl,
          email
        },
        process.env.JWT_SECRET,
        {
          expiresIn: maxAge
        })
        res.cookie('jwt', token, { maxAge: maxAge * 1000 });
      return res.status(200).json({
        id,
        username,
        profileImgUrl,
        email,
        token
      })
    } else {
      return next({
        status: 400,
        message: 'Invalid Email/Password.'
      })
    }
  } catch (e) {
    return next({ status: 400, message: 'Invalid Email/Password.' })
  }
}

const logout = (req, res) => {
  res.cookie('jwt', '', { maxAge: 1 });
  res.redirect('http://localhost:3000');
}

/**
 * Login required midddleware
 * @param {*} req express req object
 * @param {*} res express res object
 * @param {*} next express next middleware
 * @prop {String} req.headers.authorization jwt auth token if undefined it throws new Guest error
 */
const getRole = async function (req, res, next) {
  try {
    if (req.headers.authorization === undefined) throw new Error('Guest')
    const token = req.headers.authorization.split(' ')[1] // Seperate Bearer from the token
    debug('authorization completed')
    const payload = jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
      if (err) throw err
      if (decoded) {
        console.log(decoded)
        return decoded
      } else {
        // the token is not correct
        return next({ status: 401, message: 'Please Log In First' })
      }
    })
    const foundUser = await findUser(payload) // .role it returns undefined
    req.role = foundUser.role
    if (!foundUser) throw new Error('not found role')
    next()
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
      const foundRole = d.find(val => val.actions.find(action => action[0].toUpperCase() === req.method && action[1] === (req.baseUrl + req.path)) !== undefined)
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

module.exports = { signin, signup, logout, getRole, applyRoles }
