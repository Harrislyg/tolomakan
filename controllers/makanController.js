const Makan = require('../models/makan')
// const User = require('../models/user')
function onlyUnique (value, index, self) {
  return self.indexOf(value) === index
}
function shuffle (array) {
  var currentIndex = array.length
  var temporaryValue
  var randomIndex

// While there remain elements to shuffle...
  while (currentIndex !== 0) {
// Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}
// show all makans
function getAllMakans (req, res) {
  Makan.find({}, function (err, makansArray) {
    // calculate the distance between the two location
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
    // console.log(makan)
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
  let id = req.params.id

  Makan.remove({_id: id}, (err) => {
    if (err) return res.json({message: 'could not delete post b/c: ' + err})
    res.status(200).json({message: 'Makan successfully deleted'})
  })
}
function getComplex (req, res) {
  const type = req.query.type
  const price = req.query.price
  const categories = req.query.categories
  // console.log(categories)
  Makan.find({type: type, price: price, categories: categories}, function (err, makan) {
    if (err) return res.status(401).json({ error: 'undefined category' })
    // console.log(makan)
    res.status(200).json({message: 'Makan found', makan})
    // console.log(foundMakan)
  })
}
function getCategories (req, res) {
  const categories = req.params.categories
  // console.log(categories)
  Makan.find({categories: categories}, function (err, makan) {
    if (err) return res.status(401).json({ error: 'undefined category' })
    // console.log(makan)
    res.status(200).json({message: 'Makan found', makan})
    // console.log(foundMakan)
  })
}
function getPrice (req, res) {
  const price = req.params.price
  // console.log(categories)
  Makan.find({price: price}, function (err, makan) {
    if (err) return res.status(401).json({ error: 'undefined category' })
    // console.log(makan)
    res.status(200).json({message: 'Makan found', makan})
    // console.log(foundMakan)
  })
}
function getPlace (req, res) {
  const type = req.params.type
  // console.log(categories)
  Makan.find({type: type}, function (err, makan) {
    if (err) return res.status(401).json({ error: 'undefined category' })
    // console.log(makan)
    res.status(200).json({message: 'Makan found', makan})
    // console.log(foundMakan)
  })
}
function getFive (req, res) {
  // var geolocation = {
  //   latitude: req.body.lat,
  //   longitude: req.body.lng
  // }
  // var list = Makan.where('loc').near({center: [geolocation.longitude, geolocation.latitude], maxDistance: 5})
  // res.status(200).json(list)

  Makan.find({}, function (err, makan) {
    if (err) return res.status(401).json({ error: 'cannot get Five' })
    var makanArray = []
    makan.forEach(function (makanCat) {
      makanArray.push(makanCat.categories)
    })

    var uniqueMakanCat = makanArray.filter(onlyUnique)
    var randomUnique = shuffle(uniqueMakanCat)
    var foundMakan
    var results = []
    for (var x in randomUnique) {
      Makan.find({categories: randomUnique[x]}, function (err, makan) {
        if (err) return res.status(401).json({ error: 'undefined category' })
        foundMakan = makan[parseInt(Math.random() * makan.length, 10)]
        results.push(foundMakan)
        // console.log('This is results', results)
        if (results.length === 5) {
          res.status(200).json(results)
        }
      })
    }
  })
}
function getFiveByPrice (req, res) {
  var geolocation = {
    latitude: req.query.lat,
    longitude: req.query.lng
  }
  var price = parseInt(req.query.price)
  // console.log(req.query)

  Makan.where('loc')
  .near({center: [geolocation.longitude, geolocation.latitude], maxDistance: 10 / 6371})
  .exec(function (err, result) {
    if (err) return res.status(401).json({ error: 'undefined category' })
    // console.log('result:', result)
    // console.log(result)
    var results = []
    // console.log(result.length)
    for (var i = 0; i < result.length; i++) {
      if (result[i].price === price) {
        results.push(result[i])
      }
    }
    console.log(results)
    res.status(200).json(results)
  })
}

function getFiveRandom (req, res) {
  var geolocation = {
    latitude: req.query.lat,
    longitude: req.query.lng
  }
  // console.log(req.query)

  Makan.where('loc')
  .near({center: [geolocation.longitude, geolocation.latitude], maxDistance: 10 / 6371})
  .exec(function (err, result) {
    if (err) return res.status(401).json({ error: 'undefined category' })
    console.log('result:', result)
    var makansArray = []
    result.forEach(function (makan) {
      makansArray.push(makan.categories)
    })
    var uniqueMakansCat = makansArray.filter(onlyUnique)
    var randomUniqueMakansCat = shuffle(uniqueMakansCat)
    var results = []
    for (var x in randomUniqueMakansCat) {
      var singleCat = result.filter(function (makanObject) {
        return makanObject.categories === randomUniqueMakansCat[x]
      })
      results.push(singleCat[parseInt(Math.random() * singleCat.length)])
    }
    res.status(200).json(results)
  })
}

module.exports = {
  getAllMakans: getAllMakans,
  makeNewMakan: makeNewMakan,
  getOneMakan: getOneMakan,
  updateMakan: updateMakan,
  deleteMakan: deleteMakan,
  getCategories: getCategories,
  getComplex: getComplex,
  getPlace: getPlace,
  getPrice: getPrice,
  getFiveByPrice: getFiveByPrice,
  getFive: getFive,
  getFiveRandom: getFiveRandom
}
