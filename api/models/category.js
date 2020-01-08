const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = Schema({
  code: { type: Schema.Types.ObjectId },
  title: { type: String, required: true },
  description: { type: String, default: '' },
  parent: { type: String, default: 'root' },
  // set params from admin
  params: { type: Map, of: String } // key: string for param like CPU;value: type like 'string'
})

categorySchema.pre('save', async function (next) {
  try {
    this.code = new mongoose.Types.ObjectId()
    return next()
  } catch (err) {
    return next(err)
  }
})

const Category = mongoose.model('Category', categorySchema)
module.exports = Category
