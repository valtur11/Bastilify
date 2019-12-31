const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  // set params from admin
  params: { type: Map, of: String }
})

categorySchema.pre('validate', async function (next) {
  try {
    return next()
  } catch (err) {
    return next(err)
  }
})

categorySchema.pre('save', async function (next) {
  try {
    return next()
  } catch (err) {
    return next(err)
  }
})
const Category = mongoose.model('Category', categorySchema)
module.exports = Category
