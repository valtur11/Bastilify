const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = Schema({
  _id: {
    type: Schema.Types.ObjectId
  },
  price: {
    value: { type: Number, required: true },
    currency: { type: String, default: 'USD' }
  },
  targetCountry: {
    type: String,
    default: 'Bulgaria'
  },
  category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
  specs: { type: Map, of: String },
  content: [{
    lang: {
      type: String,
      default: 'en'
    },
    title: {
      type: String,
      required: true
    },
    SEO_title: {
      type: String
    },
    SEO_Description: {
      type: String
    },
    keywords: {
      type: String
    },
    shortDescription: {
      type: String,
      required: true
    },
    fullDescription: {
      // here to apply category template(for keys) + their values from models/category.js
      type: String,
      required: true
    }
  }],
  link: {
    type: String
  },
  source: {
    type: String,
    default: 'api'
  },

  // Note:  NOT required
  isAvailable: {
    type: Boolean,
    default: true
  },
  isVisible: {
    type: Boolean,
    default: false
  },
  condition: {
    type: String,
    default: 'New'
  },
  imageLinks: {
    type: Array,
    default: ['NoImagePicture']
  },
  // only for admins
  quantity: {
    type: Number,
    required: true
  }
  // add here future fields like views(popularity), sales(a number of all sales), avalaiblity of diferent places, etc.
})

productSchema.pre('save', async function (next) {
  try {
    this._id = new mongoose.Types.ObjectId()
    this.link = `/${this.id}`
  } catch (err) {
    return next(err)
  }
})

const Product = mongoose.model('Product', productSchema)
module.exports = Product
