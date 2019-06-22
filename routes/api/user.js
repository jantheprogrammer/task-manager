const express = require('express')
const router = express.Router()

const User = require('../../models/User')

router.get('/', (req, res) => {
  User.find()
    .sort({name: 1})
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

router.post('/login', (req, res) => {
  console.log(req)
})

router.post('/', (req, res) => {
  const newUser = new User({
    name: req.body.name,
    psw: req.body.psw,
  })

  newUser
    .save()
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

module.exports = router
