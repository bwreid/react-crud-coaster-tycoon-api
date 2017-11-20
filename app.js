const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const morgan = require('morgan')

if (process.env.NODE_ENV !== 'test') app.use(morgan('dev'))
app.disable('x-powered-by')
app.use(bodyParser.json())

const { ParksController } = require('./controllers')
app.get('/parks', ParksController.index)

const listener = () => `Listening on port ${port}!`
app.listen(port, listener)

module.exports = app
