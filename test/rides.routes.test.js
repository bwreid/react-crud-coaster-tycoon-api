const app = require('../app')
const chai = require('chai')
const expect = chai.expect
const knex = require('../db')

chai.use(require('chai-http'))

describe('Ride Resource', function () {
  beforeEach(function () {
    return knex.seed.run()
  })

  describe('INDEX - GET /api/rides', function () {
    it('should return all the rides', function (done) {
      chai.request(app)
      .get('/api/rides')
      .end((err, res) => {
        expect(res.status).to.equal(200)

        const { rides } = res.body
        rides.forEach(ride => delete ride.created_at && delete ride.updated_at)
        expect(rides).to.deep.equal([
          { id: 1, name: 'Blue Streak', capacity: 24, popularity: 4, park_id: 1 },
          { id: 2, name: 'Corkscrew', capacity: 20, popularity: 4, park_id: 1 },
          { id: 3, name: 'Gemini', capacity: 36, popularity: 5, park_id: 1 },
          { id: 4, name: 'Nitro', capacity: 12, popularity: 5, park_id: 2 },
          { id: 5, name: 'Bugaboo', capacity: 30, popularity: 2, park_id: 2 },
          { id: 6, name: 'Buccaneer', capacity: 60, popularity: 4, park_id: 2 },
          { id: 7, name: 'The Joker', capacity: 42, popularity: 3, park_id: 2 },
          { id: 8, name: 'Bizarro', capacity: 32, popularity: 5, park_id: 2 },
          { id: 9, name: 'Grizzly', capacity: 22, popularity: 3, park_id: 3 },
          { id: 10, name: 'Delirium', capacity: 34, popularity: 4, park_id: 3 }
        ])
        done()
      })
    })
  })

  describe('SHOW - GET /api/rides/:id', function () {
    it('should return a single ride', function (done) {
      chai.request(app)
      .get('/api/rides/1')
      .end((err, res) => {
        expect(res.status).to.equal(200)

        const { ride } = res.body
        delete ride.created_at
        delete ride.updated_at
        expect(ride).to.deep.equal({ id: 1, name: 'Blue Streak', capacity: 24, popularity: 4, park_id: 1 })
        done()
      })
    })
  })

  describe('CREATE - POST /api/rides', function () {
    it('should create a new ride', function (done) {
      chai.request(app)
      .post('/api/rides')
      .send({ name: 'Steel Vengeance', capacity: 24, popularity: 3, park_id: 1 })
      .end((err, res) => {
        expect(res.status).to.equal(201)

        const { ride } = res.body
        delete ride.created_at
        delete ride.updated_at
        expect(ride).to.deep.equal({ id: 11, name: 'Steel Vengeance', capacity: 24, popularity: 3, park_id: 1 })
        done()
      })
    })
  })

  describe('UPDATE - PUT /api/rides/:id', function () {
    it('should create a new ride', function (done) {
      chai.request(app)
      .put('/api/rides/1')
      .send({ name: 'Steel Vengeance', capacity: 24, popularity: 3, park_id: 1 })
      .end((err, res) => {
        expect(res.status).to.equal(200)

        const { ride } = res.body
        delete ride.created_at
        delete ride.updated_at
        expect(ride).to.deep.equal({ id: 1, name: 'Steel Vengeance', capacity: 24, popularity: 3, park_id: 1 })
        done()
      })
    })
  })

  describe('DESTROY - DELETE /api/rides/:id', function () {
    it('should delete a specific ride', function (done) {
      chai.request(app)
      .delete('/api/rides/1')
      .end((err, res) => {
        expect(res.status).to.equal(200)

        const { ride } = res.body
        delete ride.created_at
        delete ride.updated_at
        expect(ride).to.deep.equal({ id: 1, name: 'Blue Streak', capacity: 24, popularity: 4, park_id: 1 })
        done()
      })
    })
  })
})
