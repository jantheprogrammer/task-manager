const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')

const db = require('./config').mongoURI
const user = require('./routes/api/user')
const PORT = process.env.PORT || 8000

const app = express()

mongoose
  .connect(db, { useNewUrlParser: true, useFindAndModify: false })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err))

//bodyParser middlewear
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(express.static(path.resolve(__dirname, './client/build')))

app.use('/api/user', user)

// All remaining requests return the React app, so it can handle routing.
app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, './client/build', 'index.html'))
})

app.listen(PORT, function () {
  console.error(`Server is listening on port ${PORT}`)
})
// }
