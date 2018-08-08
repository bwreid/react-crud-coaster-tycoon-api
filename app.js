const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const bodyParser = require('body-parser')
const morgan = require('morgan')

if (process.env.NODE_ENV !== 'test') app.use(morgan('dev'))
app.use(require('cors')())
app.disable('x-powered-by')
app.use(bodyParser.json())

const { parksRouter } = require('./routes')
app.use('/api/parks', parksRouter)

const { ridesRouter } = require('./routes')
app.use('/api/rides', ridesRouter)

app.use((req, res, next) => {
  const status = 404
  const message = `Could not ${req.method} ${req.url}`
  next({ status, message })
})

app.use((err, req, res, next) => {
  console.error(err)
  const status = err.status || 500
  const message = err.message || `Something went wrong!`
  res.status(status).json({ status, message })
})

const listener = () => console.log(`Listening on port ${port}!`)
app.listen(port, listener)

module.exports = app
