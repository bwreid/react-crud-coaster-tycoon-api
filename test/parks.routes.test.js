const app = require('../app')
const chai = require('chai')
const expect = chai.expect
const knex = require('../db')

chai.use(require('chai-http'))

describe('Park Resource', function () {
  beforeEach(function () {
    return knex.seed.run()
  })

  describe('INDEX - GET /api/parks', function () {
    it('should return all the parks', function (done) {
      chai.request(app)
      .get('/api/parks')
      .end((err, res) => {
        expect(res.status).to.equal(200)

        const { parks } = res.body
        parks.forEach(park => delete park.created_at && delete park.updated_at)
        expect(parks).to.deep.equal([
          {
            id: 1,
            name: 'Cedar Point',
            city: 'Sandusky',
            state: 'Ohio'
          },
          {
            id: 2,
            name: 'Six Flags Great Adventure',
            city: 'Jackson',
            state: 'New Jersey'
          },
          {
            id: 3,
            name: 'Kings Dominion',
            city: 'Doswell',
            state: 'Virginia'
          }
        ])
        done()
      })
    })
  })

  describe('SHOW - GET /api/parks/:id', function () {
    it('should return a single park', function (done) {
      chai.request(app)
      .get('/api/parks/1')
      .end((err, res) => {
        expect(res.status).to.equal(200)

        const { park } = res.body
        delete park.created_at
        delete park.updated_at
        expect(park).to.deep.equal({
          id: 1,
          name: 'Cedar Point',
          city: 'Sandusky',
          state: 'Ohio'
        })
        done()
      })
    })
  })

  describe('CREATE - POST /api/parks', function () {
    it('should create a new park', function (done) {
      chai.request(app)
      .post('/api/parks')
      .send({ name: 'Universal Studios Hollywood', city: 'Universal City', state: 'CA' })
      .end((err, res) => {
        expect(res.status).to.equal(201)

        const { park } = res.body
        delete park.created_at
        delete park.updated_at
        expect(park).to.deep.equal({
          id: 4,
          name: 'Universal Studios Hollywood',
          city: 'Universal City',
          state: 'CA'
        })
        done()
      })
    })
  })

  describe('UPDATE - PUT /api/parks/:id', function () {
    it('should create a new park', function (done) {
      chai.request(app)
      .put('/api/parks/1')
      .send({ name: 'Universal Studios Hollywood', city: 'Universal City', state: 'CA' })
      .end((err, res) => {
        expect(res.status).to.equal(200)

        const { park } = res.body
        delete park.created_at
        delete park.updated_at
        expect(park).to.deep.equal({
          id: 1,
          name: 'Universal Studios Hollywood',
          city: 'Universal City',
          state: 'CA'
        })
        done()
      })
    })
  })

  describe('DESTROY - DELETE /api/parks/:id', function () {
    it('should delete a specific park', function (done) {
      chai.request(app)
      .delete('/api/parks/1')
      .end((err, res) => {
        expect(res.status).to.equal(200)

        const { park } = res.body
        delete park.created_at
        delete park.updated_at
        expect(park).to.deep.equal({
          id: 1,
          name: 'Cedar Point',
          city: 'Sandusky',
          state: 'Ohio'
        })
        done()
      })
    })
  })
})
