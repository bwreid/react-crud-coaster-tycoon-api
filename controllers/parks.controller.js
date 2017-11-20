const { Park } = require('../models')

class ParksController {
  constructor () {}

  static index (req, res, next) {
    Park.all().then(parks => res.json({ parks }))
  }
}

module.exports = ParksController
