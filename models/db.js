const mongoose = require('mongoose')
const dbUri = process.env.dbUri
mongoose.set('debug', true)
mongoose.Promise = Promise
mongoose.connect(dbUri, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true
})
  .catch(err => console.log(err))
mongoose.connection.on('error', err => {
  console.log(err)
})
module.exports.Product = require('./product')
module.exports.Category = require('./category')
module.exports.User = require('./user')
module.exports.Order = require('./order')
