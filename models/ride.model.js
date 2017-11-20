const db = require('../db')

class Ride {
  constructor () {}

  static all () {
    return db('rides')
  }

  static find (id) {
    return db('rides').where({ id }).first()
  }

  static create (body) {
    return db('rides').insert(body).returning('*').then(([ride]) => ride)
  }

  static update (id, body) {
    return db('rides').update(body).where({ id }).returning('*').then(([ride]) => ride)
  }

  static destroy (id) {
    return db('rides').del().where({ id }).returning('*').then(([ride]) => ride)
  }

  static destroyAll (parkId) {
    return db('rides').del().where({ park_id: parkId }).returning('*')
  }
}

module.exports = Ride
