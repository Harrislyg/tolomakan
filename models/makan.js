const mongoose = require('mongoose')

const MakanSchema = new mongoose.Schema({
  name: { type: String, require: true, unique: true },
  loc: { type: [Number], index: true },
  latitude: Number,
  longitude: Number,
  address: String,
  type: String,
  categories: String,
  mapId: String,
  price: Number
})

const Makan = mongoose.model('Makan', MakanSchema)

module.exports = Makan
