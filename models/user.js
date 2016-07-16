const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const uuid = require('uuid')
const makanSchema = require('./makan')

const UserSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  auth_token: { type: String, unique: true },
  _makans: [{type: mongoose.Schema.Types.ObjectId, ref: 'Makan'}]
})

UserSchema.pre('save', function (next) {
  const user = this

  // here, we use bcrypt to generate salt, with 8 iterations.
  if (!user.isModified('password')) return next()
  bcrypt.genSalt(8, (err, salt) => {
    if (err) return next(err)

    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err)
      user.password = hash
      next()
    })
  })
  // GENERATE AUTHENTICATION TOKEN
  user.auth_token = uuid.v4()
})

UserSchema.methods.authenticate = function (password, callback) {
  bcrypt.compare(password, this.password, callback)
}

const User = mongoose.model('User', UserSchema)

module.exports = User
