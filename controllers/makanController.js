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
function getRandom (req, res) {
  const categories = req.params.categories
  // console.log(categories)
  Makan.find({categories: categories}, function (err, makan) {
    if (err) return res.status(401).json({ error: 'undefined category' })
    const foundMakan = makan[parseInt(Math.random() * makan.length)]
    res.status(200).json({message: 'Makan found', foundMakan})
    // console.log(foundMakan)
  })
}
function getFive (req, res) {
  var geolocation = {
    latitude: req.body.lat,
    longitude: req.body.lng
  }
  Makan.find({}, function (err, makan) {
    var makanArray = []
    makan.forEach(function (makanCat) {
      makanArray.push(makanCat.categories)
    })
    function onlyUnique (value, index, self) {
      return self.indexOf(value) === index
    }
    function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex

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
    var uniqueMakanCat = makanArray.filter(onlyUnique)
    var randomUnique = shuffle(uniqueMakanCat)
    var foundMakan
    var results = []
    for(var x in randomUnique) {
      Makan.find({categories: randomUnique[x]}, function (err, makan) {
        if (err) return res.status(401).json({ error: 'undefined category' })
        foundMakan = makan[parseInt(Math.random() * makan.length)]
        results.push(foundMakan)
        console.log("This is results",results)
        if(results.length === 5) {
          res.status(200).json(results)
        }
      })
    }
  })

  // var categories = ['Western', 'Chinese', 'Thai', 'Japanese', 'Korean']
  // var foundMakan
  // var foundMakan1
  // // console.log(categories)
  // var results = []
  // for (var i = 0; i < categories.length; i++) {
  //   Makan.find({categories: categories[i]}, function (err, makan) {
  //     if (err) return res.status(401).json({ error: 'undefined category' })
  //      foundMakan = makan[parseInt(Math.random() * makan.length)]
  //
  //      results.push(foundMakan)
  //      if ( results.length === categories.length ) {
  //        res.status(200).json({message: 'Makan found', results})
  //      }
  //     console.log(i)
  // })
  // }
  // Makan.find({categories: categories[1]}, function (err, makan1) {
  //     if (err) return res.status(401).json({ error: 'undefined category' })
  //      foundMakan1 = makan[parseInt(Math.random() * makan1.length)]
  //     // res.status(200).json({message: 'Makan found', foundMakan1})
  //     // console.log(foundMakan)
  //     // console.log(i)
  // })
  // res.status(200).json(foundMakan1)

}

module.exports = {
  getAllMakans: getAllMakans,
  makeNewMakan: makeNewMakan,
  getOneMakan: getOneMakan,
  updateMakan: updateMakan,
  deleteMakan: deleteMakan,
  getRandom: getRandom,
  getFive: getFive
}
