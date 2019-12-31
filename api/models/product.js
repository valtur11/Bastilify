const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  price: {
    value: { type: Number, required: true },
    currency: { type: String, default: 'USD', required: true }
  },
  targetCountry: {
    type: String,
    default: 'Bulgaria'
  },
  specs: { type: mongoose.ObjectId, ref: 'Category' },
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
    type: String,
    required: true
  },
  source: {
    type: String,
    required: true
  },

  // Note:  isAvailable, condition, imageLink, promoLabels, promoPrice, SEO_title, SEO_Description and keywords are NOT required
  isAvailable: {
    type: Boolean,
    default: true
  },
  condition: {
    type: String,
    default: 'New'
  },
  imageLink: {
    type: Array,
    default: ['NoImagePicture']
  },
  // only for admins
  quantity: {
    type: Number,
    required: true
  }
  // add here future fields like views(popularity), sells(a number of all sales), avalaiblity of diferent places, etc.
})

const Product = mongoose.model('Product', productSchema)
module.exports = Product
