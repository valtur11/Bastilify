const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  itemShortDescription: {
    type: String,
    required: true
  },
  itemFullDescription: {
    //here to apply category template(for keys) + their values from models/category.js
    type: String,
    required: true
  },
 
  //Note:  isAvailable, itemImagesUrl, promoLabels, promoPrice, SEO_title, SEO_Description and keywords are NOT required;
  isAvailable: {
    type: Boolean,
    default: true,
  },
  itemImagesUrl: {
    type: Array,
    default: ['NoImagePicture']
  },
  promoLabels: {
    type: String,
    default: 'none' 
  },
  promoPrice: {
    type: Number
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
  //only for admins
  quantity: {
    type: Number,
    required: true
  }
  //add here future fields like views(popularity), sells(a number of all sales), avalaiblity of diferent places, etc.
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;