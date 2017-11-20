const { Park } = require('../models')

class ParksController {
  constructor () {}

  static index (req, res, next) {
    Park.all().then(parks => res.json({ parks }))
  }

  static show (req, res, next) {
    Park.find(req.params.id).then(park => res.json({ park }))
  }

  static create (req, res, next) {
    Park.create(req.body).then(park => res.status(201).json({ park }))
  }

  static update (req, res, next) {
    Park.update(req.params.id, req.body).then(park => res.json({ park }))
  }

  static destroy (req, res, next) {
    Park.destroy(req.params.id).then(park => res.json({ park }))
  }
}

module.exports = ParksController
