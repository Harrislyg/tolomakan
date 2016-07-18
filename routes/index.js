var express = require('express')
var router = express.Router()
const User = require('../models/user')
const Makan = require('../models/makan')
const makanController = require('../controllers/makanController')
const userController = require('../controllers/userController')
const signInUpController = require('../controllers/signInUpController')

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log('hello')
  res.json({message: 'Hello'})
})

router.get('/makans', makanController.getAllMakans)
router.post('/makans', makanController.makeNewMakan)
router.route('/makans/:id')
  .patch(userController.userLoggedIn, makanController.updateMakan)
router.get('/users', userController.getAllUsers)
router.get('/users/:id', userController.getOneUser)

router.post('/signup', signInUpController.signUp)
router.post('/signin', signInUpController.signIn)

module.exports = router
