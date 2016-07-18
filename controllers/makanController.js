const Makan = require('../models/makan')
const User = require('../models/user')
// show all makans
function getAllMakans (req, res) {
  Makan.find({}, function (err, makansArray) {
    if (err) return res.status(401).json({error: '/getAllMakans error'})
    res.status(200).json(makansArray)
  })
}
// create a new makan
function makeNewMakan (req, res) {
  const makan = new Makan(req.body)
  makan.save((err, makan) => {
    if (err) return res.status(401).json({error: '/post makeNewMakan error 1'})
    res.status(200).json({message: 'makan created!', makan})
  })
}
// get one makan place by id
function getOneMakan (req, res) {
  const id = req.params.id
  Makan.findById({_id: id}, function (err, makan) {
    if (err) return res.status(401).json({error: '/get getOneMakan error 1'})
    console.log(makan)
    res.status(200).json(makan)
  })
}
// update a makan place by id
function updateMakan (req, res) {
  const id = req.params.id
  Makan.findById({_id: id}, function (err, makan) {
    if (err || !makan) return res.status(401).json({error: '/get updateMakan error'})
    makan.name = req.body.name
    makan.latitude = req.body.latitude
    makan.longitude = req.body.longitude
    makan.address = req.body.address
    makan.type = req.body.type
    makan.categories = req.body.categories
    makan.price = req.body.price
    makan.save((err) => {
      if (err) return res.status(401).json({error: err})
      res.status(200).json({message: 'Makan updated', makan})
    })
  })
}
// delete a makan place by id
function deleteMakan (req, res) {
  Makan.findById(req.params.id, function (err, makan) {
    if (err) return res.status(401).json({ error: '/get Makan error' })
    makan.pull()
    makan.save((err) => {
      if (err) return res.status(401).json({error: err})
      res.status(200).json({message: 'Makan deleted', makan})
    })
  })
}
function getRandom (req, res) {
  const categories = req.params.categories
  console.log(categories)
  Makan.find({categories: categories}, function (err, makan) {
    if (err) return res.status(401).json({ error: 'undefined category' })
    const foundMakan = makan[parseInt(Math.random() * makan.length)]
    console.log(foundMakan)
    res.status(200).json({message: 'Makan found', foundMakan})
  })
}

module.exports = {
  getAllMakans: getAllMakans,
  makeNewMakan: makeNewMakan,
  getOneMakan: getOneMakan,
  updateMakan: updateMakan,
  deleteMakan: deleteMakan,
  getRandom: getRandom
}
