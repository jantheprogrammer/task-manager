const express = require('express')
const router = express.Router()

const Task = require('../../models/Task')

router.get('/', (req, res) => {
  Task.find()
    .sort({ priority: -1, deadline: 1 })
    .then(task => res.json(task))
    .catch(err => res.json(err))
})

router.post('/', (req, res) => {
  const newTask = new Task({
    task: req.body.task,
    done: req.body.done,
    priority: req.body.priority,
    deadline: req.body.deadline,
  })

  newTask
    .save()
    .then(task => res.json(task))
    .catch(err => res.json(err))
})

router.delete('/:id', (req, res) => {
  Task.deleteOne({ _id: req.params.id })
    .then(task => res.json(task))
    .catch(err => res.json(err))
})

router.put('/:id', (req, res) => {
  Task.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, task) => {
    if (err) {
      return res.status(500).send(err)
    } else {
      return res.json(task)
    }
  })
})


module.exports = router
