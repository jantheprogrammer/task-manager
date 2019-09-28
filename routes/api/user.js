const express = require('express')
const router = express.Router()

const User = require('../../models/User')

router.get('/', (req, res) => {
  User.find()
    .sort({ name: 1 })
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

router.get('/:id', (req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

router.post('/login', (req, res) => {
  User.findOne({ name: req.body.name, psw: req.body.psw })
    .then(user => verifyUser(user, res))
    .catch(err => res.json(err))
})

function verifyUser(user, res) {
  if (!user) {
    res.status(404)
    return res.json({
      error: {
        message:
          'User with this combination of name and password does not exist!',
      },
    })
  }
  return res.json(user)
}

router.post('/', (req, res) => {
  const newUser = new User({
    name: req.body.name,
    psw: req.body.psw,
    todos: req.body.todos,
  })

  newUser
    .save()
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

module.exports = router
