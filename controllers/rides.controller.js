const { Ride } = require('../models')

class RidesController {
  constructor () {}

  static index (req, res, next) {
    Ride.all().then(rides => res.json({ rides }))
  }

  static show (req, res, next) {
    Ride.find(req.params.id).then(ride => res.json({ ride }))
  }

  static create (req, res, next) {
    Ride.create(req.body).then(ride => res.status(201).json({ ride }))
  }

  static update (req, res, next) {
    Ride.update(req.params.id, req.body).then(ride => res.json({ ride }))
  }

  static destroy (req, res, next) {
    Ride.destroy(req.params.id).then(ride => res.json({ ride }))
  }
}

module.exports = RidesController
