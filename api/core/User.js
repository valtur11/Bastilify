const db = require('../models/db')
const debug = require('debug')('core:User')
/**
 * Find user by email
 * @param {*} obj search obj
 */
async function findUser (obj) {
  try {
    debug('findUser')
    return db.User.findOne({
      email: obj.email
    })
  } catch (e) {
    return e
  }
}

/**
 * Create new user
 * @param {*} obj user object
 */
async function createUser (obj) {
  try {
    debug(obj)
    const user = await db.User.create({ ...obj })
    const foundUser = await db.User.findById(user._id)
    debug(foundUser)
    return foundUser
  } catch (e) {
    debug(e.code)
    if (e.code === 11000) {
      e.message = 'Sorry, that username or email is taken'
    }
    return e
  }
}

module.exports = { findUser, createUser }
