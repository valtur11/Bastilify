const { createOrder, listOrders } = require('../../core/Order')
const debug = require('debug')('controller:Order')

async function newOrder (req, res, next) {
  try {
    debug(req.headers)
    const obj = {
      ...req.body,
      client_details: {
        browser_ip: req.ip,
        user_agent: req.headers['user-agent'],
        accept_language: req.headers['accept-language'] || 'en'
      }
    }
    const r = await createOrder(obj)
    res.status(201).json(r)
  } catch (e) {
    return next(e)
  }
}

async function getOrders (req, res, next) {
  try {
    const r = await listOrders()
    res.status(200).json(r)
  } catch (e) {
    return next(e)
  }
}

module.exports = { newOrder, getOrders }
