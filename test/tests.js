/* globals describe before after it */

const expect = require('chai').expect
const supertest = require('supertest')
const app = require('../bin/www')
const Makan = require('../models/makan')
// const port = process.env.PORT || 3000
const api = supertest('http://localhost:3000')

describe('GET /', function () {
  this.timeout(10000)
  it('should return a 200 response', (done) => {
    api.get('/')
    .set('Accept', 'application/json')
    .expect(200, done)
  })
})

describe('POST /signup', function () {
  this.timeout(10000)
  it('should add an user and return it', (done) => {
    api.post('/signup')
    .set('Accept', 'application/json')
    .send({
      'name': 'Ariel',
      'email': 'shihqian@gmail.com',
      'password': '123456'
    }).end((error, response) => {
      expect(error).to.be.a('null')
      done()
    })
  })
  it('should expect a 401 error due signup error', (done) => {
    api.post('/signup')
    .set('Accept', 'application/json')
    .send({
      'name': 'James',
      'email': 'xxx@yzz.com'
    })
    .expect(401, done)
  })
})

describe('POST /signin', function () {
  this.timeout(100000)
  // it('should ')
  it('should return user name', (done) => {
    api.post('/signin')
    .set('Accept', 'application/json')
    .send({
      'email': 'shihqian@gmail.com',
      'password': '123456'
    })
    .end((error, response) => {
      expect(error).to.be.a('null')
      expect(response.body.name).to.equal('Ariel')
      done()
    })
  })
  it('should expect a 401 error due signup error', (done) => {
    api.post('/signin')
    .set('Accept', 'application/json')
    .send({
      'email': 'xxx@yzz.com',
      'password': '123456'
    })
    .expect(401, done)
  })
  it('should expect another 401 error due to incorrect password', (done) => {
    api.post('/signin')
    .set('Accept', 'application/json')
    .send({
      'email': 'shihqian@gmail.com',
      'password': '13212412'
    })
    .expect(401, done)
  })
})

describe('GET /makans', function () {
  this.timeout(10000)
  it('should return a 200 response', (done) => {
    api.get('/makans')
    .set('Accept', 'application/json')
    .expect(200, done)
  })
  it('should return an array', (done) => {
    api.get('/makans')
    .set('Accept', 'application/json')
    .end((error, response) => {
      expect(error).to.be.a('null')
      // expecting the get makan routes to return an array
      expect(response.body).to.be.an('array')
      done()
    })
  })
  describe('POST /makans', () => {
    var email = 'shihqian@gmail.com'
    var auth_token
    this.timeout(10000)
    before((done) => {
      api.post('/signin')
      .set('Accept', 'application/json')
      .send({
        'email': email,
        'password': '123456'
      }).end(function (error, response) {
        if (error) return response.status(401).json({ error: 'authentication not found' })
        auth_token = response.body.auth_token
        done()
      })
    })
    it('should return a 200 response', (done) => {
      api.post('/makans')
      .set('Accept', 'application/json')
      .set('User-Email', email)
      .set('Auth-Token', auth_token)
      .send({
        'name': 'Wolf Burgers',
        'latitude': 1.295401,
        'longitude': 103.858190,
        'address': '3 Temasek Blvd, 444-445 / 448-450 Suntec City, 038983',
        'type': 'Restaurant',
        'categories': 'Western',
        'price': 10
      }).end((err, res) => {
        expect(err).to.be.a('null')
        done()
      })
    })
  })
})

describe('GET /makans/:id', function () {
  this.timeout(10000)
  it('should return a 200 response', (done) => {
    api.get('/makans/578c9c33a24cdb27a1e796a3')
    .set('Accept', 'application/json')
    .expect(200, done)
  })
})

describe('PUT /makans/:id', function () {
  var email = 'shihqian@gmail.com'
  var auth_token
  this.timeout(10000)
  before((done) => {
    api.post('/signin')
    .set('Accept', 'application/json')
    .send({
      'email': email,
      'password': '123456'
    }).end(function (error, response) {
      if (error) return response.status(401).json({ error: 'authentication not found' })
      auth_token = response.body.auth_token
      done()
    })
  })
  it('should return a 200 response', (done) => {
    api.put('/makans/578e03e10d57c98311936738')
    .set('Accept', 'application/json')
    .set('User-Email', email)
    .set('Auth-Token', auth_token)
    .send({
      'name': 'The Populus Coffee & Food Co.',
      'loc': [
        103.84075,
        1.278195
      ],
      'latitude': 1.278195,
      'longitude': 103.84075,
      'address': '146 Neil Rd, 088875',
      'type': 'Cafe',
      'categories': 'Western',
      'mapId': 'ChIJIQ0quW0Z2jERoyEo9Sbz8pY',
      'price': 25
    })
    .expect(200, done)
  })
  it('should update a makan place', (done) => {
    api.get('/makans/578e03e10d57c98311936738')
    .set('Accept', 'application/json')
    .end((error, response) => {
      // console.log(response.body)
      expect(error).to.be.a('null')
      expect(response.body.price).to.equal(25)
      done()
    })
  })
})

describe('DELETE /makans/:id', function () {
  var auth_token
  var id
  var email = 'jus@email.com'
  this.timeout(10000)
  before((done) => {
    api.post('/signin')
    .set('Accept', 'application/json')
    .send({
      'email': email,
      'password': '123456'
    }).end(function (error, response) {
      if (error) return response.status(401).json({ error: 'authentication not found' })
      auth_token = response.body.auth_token
      done()
    })
  })
  it('should remove a makan-place', (done) => {
    Makan.find({name: 'Wolf Burgers'}, function (error, makan) {
      if (error) return makan.status(401).json({ error: 'cannot be deleted' })
      id = makan[0]._id
      console.log(id)
      api.delete('/makans/' + id)
      .set('Accept', 'application/json')
      .set('User-Email', email)
      .set('Auth-Token', auth_token)
      .end(done)
    })
  })
})
