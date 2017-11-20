const db = require('../db')
const Ride = require('./ride.model')

class Park {
  constructor () {}

  static all () {
    return db('parks')
  }

  static find (id) {
    return db('parks').where({ id }).first()
  }

  static create (body) {
    return db('parks').insert(body).returning('*').then(([park]) => park)
  }

  static update (id, body) {
    return db('parks').update(body).where({ id }).returning('*').then(([park]) => park)
  }

  static destroy (id) {
    return Ride.destroyAll(id).then(() => {
      return db('parks').del().where({ id }).returning('*').then(([park]) => park)
    })
  }
}

module.exports = Park
