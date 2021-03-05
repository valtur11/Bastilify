const mongoose = require('mongoose')

const Schema = mongoose.Schema

/**
 * Custom address schema for reducing duplication.
 */
const customAddressSchema = {
  address1: { type: String, required: true },
  address2: { type: String },
  city: { type: String, required: true },
  company: { type: String, default: null },
  country: { type: String, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  phone: { type: String, required: true },
  province: { type: String },
  zip: { type: String },
  name: { type: String },
  province_code: { type: String },
  country_code: { type: String },
  latitude: { type: String },
  longitude: { type: String }
}

const orderSchema = Schema({
  created_at: { type: Date, default: null },
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
  processing_method: { type: String },
  /* payment_details: {
    avs_result_code: { type: String, required: true },
    credit_card_bin: { type: String, required: true },
    cvv_result_code: { type: String, required: true },
    credit_card_number: { type: String, required: true },
    credit_card_company: { type: String, required: true }
  }, */
  number: { type: Number }, // order number
  email: { type: String },
  phone: { type: String },
  financial_status: { type: String, default: 'no' },
  shipping_address: { ...customAddressSchema },
  fulfillment_status: { type: String },
  line_items: [
    {
      content: [
        {
          0: {
            title: {
              type: String
            }
          }
        }
      ],
      price: {
        currency: {
          type: String
        },
        value: {
          type: Number
        }
      },
      quantityCart: {
        type: Number
      }
    }
  ],
  total_cost: { type: Number }
  // customer: { type: Schema.Types.ObjectId, ref: 'User', required: true }
})

const Order = mongoose.model('Order', orderSchema)
module.exports = Order
