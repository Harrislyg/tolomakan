const Makan = require('../models/makan')
const User = require('../models/user')

function getAllMakans (req, res) {
  Makan.find({}, function (err, makansArray) {
    if (err) return res.status(401).json({error: '/getAllMakans error'})
    res.status(200).json(makansArray)
  })
}

function makeNewMakan (req, res) {
  const makan = new Makan(req.body)
  makan.save((err, makan) => {
    if (err) return res.status(401).json({error: '/post makeNewMakan error 1'})
    res.status(200).json({message: 'makan created!', makan})
  })
}

function getAllPostsOfOneUser (req, res) {
  User.findById(req.params.user_id, function (err, user) {
    if (err) return res.status(401).json({error: '/get getAllPostsOfOneUser error 1'})
    res.status(200).json(user.posts)
  })
}

// function getOnePostOfOneUser (req, res) {
//   const postId = req.params.id
//   User.findById(req.params.user_id, function (err, user) {
//     if (err) return res.status(401).json({error: '/get getOnePostOfOneUser error 1'})
//     const post = user.posts.id(postId)
//     res.status(200).json(post)
//   })
//
//   Post.findById(req.params.id, function (err, post) {
//     if (err) console.log({message: 'no post found'})
//     res.status(200).json(post)
//   })
// }
//
// // needs to be fixed. can't access posts which are nested inside uesrs
// function getPostById (req, res) {
//   const postId = req.params.id
//   const post = req.currentUser.posts.id(postId)
//   res.status(200).json(post)
// }
//
function updateMakan (req, res) {
  const makanId = req.params.id
  var makan = req.currentUser.posts.id(makanId)
  post.title = req.body.title
  post.body = req.body.body
  req.currentUser.save((err) => {
    if (err) return res.status(401).json({error: err})
    res.status(200).json({message: 'Post updated', post})
  })
}
//
// function deletePost (req, res) {
//   const postId = req.params.id
//   var post = req.currentUser.posts.id(postId)
//   req.currentUser.posts.pull(post)
//   req.currentUser.save((err) => {
//     if (err) return res.status(401).json({error: err})
//     res.status(200).json({message: 'Post deleted!'})
//   })
// }

module.exports = {
  getAllMakans: getAllMakans,
  makeNewMakan: makeNewMakan

}
