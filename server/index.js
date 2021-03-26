const express = require('express')
const bodyParser = require('body-parser')
const pino = require('express-pino-logger')()
const mongoose = require('mongoose')
const app = express()
const URI = process.env.MONGO_URI

// connect to Mongo DB database
mongoose
  .connect(URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'azeti-leaderboard',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err))

// sets a schema for the 'leaderboard' collection
const leaderSchema = new mongoose.Schema({
  name: String,
  score: Number,
})

// creates model from new schema
const Leaderboard = mongoose.model('Leaderboard', leaderSchema)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(pino)

// adds player name and score to leaderboard database
app.post('/addplayer', (req, res) => {
  const myPlayer = new Leaderboard(req.body)
  myPlayer
    .save()
    .then((item) => {
      console.log('player saved to database')
      res.send(item)
    })
    .catch((err) => {
      res.status(400).console.error('unable to save player to database')
    })
})

app.get('/getplayers', function (req, res) {
  Leaderboard.find({}, (err, people) => {
    return res.send(people)
  })
})

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
)
