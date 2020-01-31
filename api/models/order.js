const mongoose = require('mongoose')

const Schema = mongoose.Schema

/**
 * Custom address schema for reducing duplication.
 */
const customAddressSchema = {
  address1: { type: String, required: true },
  address2: { type: String },
  city: { type: String, required: true },
  company: null,
  country: { type: String, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  phone: { type: String, required: true },
  province: { type: String, required: true },
  zip: { type: String, required: true },
  name: { type: String },
  province_code: { type: String },
  country_code: { type: String },
  latitude: { type: String, required: true },
  longitude: { type: String, required: true }
}

const orderSchema = Schema({
  created_at: { type: Date, required: true },
  closed_at: { type: Date },
  canceled_at: { type: Date, default: null },
  updated_at: { type: Date, default: null },
  cancel_reason: { type: String },
  client_details: {
    accept_language: { type: String, required: true },
    browser_height: { type: Number },
    browser_ip: { type: String, required: true },
    browser_width: { type: Number },
    session_hash: { type: String },
    user_agent: { type: String, required: true }
  },
  processing_method: { type: String, required: true },
  /* payment_details: {
    avs_result_code: { type: String, required: true },
    credit_card_bin: { type: String, required: true },
    cvv_result_code: { type: String, required: true },
    credit_card_number: { type: String, required: true },
    credit_card_company: { type: String, required: true }
  }, */
  number: { type: Number, required: true }, // order number
  email: { type: String, required: true },
  phone: { type: String, required: true },
  financial_status: { default: 'no' },
  billing_address: { ...customAddressSchema },
  shipping_address: { ...customAddressSchema },
  fulfillment_status: { type: String } // ,
  // line_items: [{ type: Schema.Types.ObjectId, ref: 'Product', required: true }],
  // customer: { type: Schema.Types.ObjectId, ref: 'User', required: true }
})

const Order = mongoose.model('Order', orderSchema)
module.exports = Order
