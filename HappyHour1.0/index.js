const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./routes')
const db = require('./db')
const path = require('path')

const PORT = process.env.PORT || 3001
const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api', routes)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
// process.env.NODE_ENV === 'production'
if (1==1) {
  app.use(express.static(path.join(__dirname, 'client/build')))
  app.get('*', (req, res) => {
    res.sendFile(path.join(`${__dirname}/client/build/index.html`))
  })
}

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
