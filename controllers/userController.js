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
  User.findById(req.params.user_id, function (err, user) {
    if (err) return res.status(404).json({error: '/user getOneUser error 1'})
    res.status(200).json(user)
  })
}

module.exports = {
  userLoggedIn: userLoggedIn,
  getAllUsers: getAllUsers,
  getOneUser: getOneUser
}
