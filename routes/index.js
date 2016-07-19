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

router.get('/random/:categories', makanController.getRandom)
router.get('/random', makanController.getFive)

router.route('/makans/:id')
.get(makanController.getOneMakan)
.put(userController.userLoggedIn, makanController.updateMakan)
.delete(userController.userLoggedIn, makanController.deleteMakan)

router.get('/users', userController.getAllUsers)
router.get('/users/:id', userController.getOneUser)

router.post('/signup', signInUpController.signUp)
router.post('/signin', signInUpController.signIn)

module.exports = router
