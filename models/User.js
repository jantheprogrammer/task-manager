const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  psw: {
    type: String,
    required: true,
  },
  todos: [],
})

module.exports = mongoose.model('User', UserSchema)
