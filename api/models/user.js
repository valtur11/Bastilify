const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema

const userSchemа = Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  /**
   * Is this email verified
   * @todo by default to be false, but then must sent email for vertification
   */
  verified_email: { type: Boolean, default: true },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  profileImgUrl: {
    type: String
  },
  role: {
    name: { type: String, default: 'Customer' },
    level: { type: Number, default: 1 }
  }
})

userSchemа.pre('save', async function (next) {
  try {
    if (!this.isModified('password')) {
      return next()
    }
    const hashedPassword = await bcrypt.hash(this.password, 10)
    this.password = hashedPassword
    return next()
  } catch (e) {
    return next(e)
  }
})

userSchemа.methods.comparePassword = async function (candidatePassword, next) {
  try {
    const isMatch = await bcrypt.compare(candidatePassword, this.password)
    return isMatch
  } catch (e) {
    return next(e)
  }
}

const User = mongoose.model('User', userSchemа)

module.exports = User
