const User = require('../models/user')

function userLoggedIn (req, res, next) {
  const userEmail = req.get('User-Email')
  const authToken = req.get('Auth-Token')
  if (!userEmail || !authToken) return res.status(401).json({error: 'unauthorised'})

  User.findOne({email: userEmail, auth_token: authToken}, (err, user) => {
    if (err || !user) return res.status(401).json({error: 'unauthorised'})
    req.currentUser = user
    next()
  })
}

function getAllUsers (req, res) {
  User.find({}, function (err, usersArray) {
    if (err) return res.status(401).json({error: '/users getAllUsers error 1'})
    res.status(200).json(usersArray)
  })
}

function getOneUser (req, res) {
  User.findById(req.params.id, function (err, user) {
    if (err) return res.status(404).json({error: '/user getOneUser error 1'})
    res.status(200).json(user)
  })
}
function editUser (req, res, next) {
  User.findOne({ auth_token: req.get('Auth-Token') }, (err, user) => {
    if (err) res.status(401).json({error: 'Cannot find user'})
    else {
      user.name = req.body.name
      user.email = req.body.email
      user.password = req.body.password
      user.save(function (err) {
        if (err) res.status(400).json({error: 'cannot save user'})
        res.status(200).json({message: 'User successfully updated!'})
        next()
      })
    }
  })
}
function deleteUser (req, res, next) {
  User.findOne({ auth_token: req.get('Auth-Token') }, (err, user) => {
    if (err || !user) return res.status(401).json({error: 'Email or password is invalid'})
    user.remove()
    res.status(200).json({message: 'User is deleted'})
  })
}

module.exports = {
  userLoggedIn: userLoggedIn,
  getAllUsers: getAllUsers,
  getOneUser: getOneUser,
  deleteUser: deleteUser,
  editUser: editUser
}
