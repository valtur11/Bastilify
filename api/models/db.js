const mongoose = require('mongoose')
const dbUri = process.env.dbUri
mongoose.set('debug', true)
mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)
mongoose.set('useUnifiedTopology', true)
mongoose.Promise = Promise
mongoose.connect(dbUri, { useNewUrlParser: true })
  .catch(err => console.log(err))
mongoose.connection.on('error', err => {
  console.log(err)
})
module.exports.Product = require('./product')
