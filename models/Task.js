const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TaskSchema = new Schema({
  task: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    required: true,
  },
  priority: {
    type: Number,
    required: true,
  },
  deadline: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('Task', TaskSchema)
