var express = require('express')
var router = express.Router()
const User = require('../models/user')
const Makan = require('../models/makan')
const makanController = require('../controllers/makanController')
const userController = require('../controllers/userController')
const signInUpController = require('../controllers/signInUpController')

/* GET home page. */
router.get('/', function (req, res, next) {
  // console.log('hello')
  res.json({message: 'Hello'})
})

router.route('/makans')
.get(makanController.getAllMakans)
.post(userController.userLoggedIn, makanController.makeNewMakan)

router.get('/random', makanController.getFive)
router.get('/type', makanController.getComplex)
router.get('/randomFive', makanController.getFiveRandom)
router.get('/near', makanController.getFiveByPrice)
router.get('/random/:categories', makanController.getCategories)
router.get('/place/:type', makanController.getPlace)

router.get('/price/:price', makanController.getPrice)

router.route('/makans/:id')
.get(makanController.getOneMakan)
.put(userController.userLoggedIn, makanController.updateMakan)
.delete(userController.userLoggedIn, makanController.deleteMakan)

router.route('/users')
.get(userController.getAllUsers)
.delete(userController.deleteUser)

router.route('/users/:id')
.get(userController.getOneUser)

// .put(userController.updateUser)
router.post('/history/:id', userController.userLoggedIn, userController.postHistory)
router.get('/history', userController.userLoggedIn, userController.getHistory)

router.post('/signup', signInUpController.signUp)
router.post('/signin', signInUpController.signIn)

module.exports = router
