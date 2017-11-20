const db = require('../db')

class Park {
  constructor () {}

  static all () {
    return db('parks')
  }
}

module.exports = Park
