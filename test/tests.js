/* globals  describe it */

const expect = require('chai').expect
const supertest = require('supertest')
const app = require('../bin/www')
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

// POST /signup
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

// POST /signin
describe('POST /signin', function () {
  this.timeout(10000)
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
        expect(response.body.message).to.equal('sign in success! welcome: Ariel')
        done()
      })
  })
  it('should expect a 401 error due signup error', (done) => {
    api.post('/signup')
      .set('Accept', 'application/json')
      .send({
        'email': 'xxx@yzz.com',
        'password': '123456'
      })
      .expect(401, done)
  })
  it('should expect another 401 error due to incorrect password', (done) => {
    api.post('/signup')
    .set('Accept', 'application/json')
    .send({
      'email': 'shihqian@gmail.com',
      'password': '13212412'
    })
    .expect(401, done)
  })
})

// GET all makans
describe('GET /makans', () => {
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
  // POST /makans
  describe('POST /makans', () => {
    it('should return a 200 response', (done) => {
      api.post('/makans')
      .set('Accept', 'application/json')
      .send({
        'name': 'Wolf Burgers',
        'latitude': 1.295401,
        'longitude': 103.858190,
        'address': '3 Temasek Blvd, 444-445 / 448-450 Suntec City, 038983',
        'type': 'Restaurant',
        'categories': 'Western',
        'price': 10
      })
      .expect(200, done)
    })
    // Unable to test for 401
    // it('should return a 401 response when posting is unsuccessful due to wrong input format', (done) => {
    //   api.post('/makans')
    //   .set('Accept', 'application/json')
    //   .send({
    //     'name': 'Jack Burger',
    //     'latitude': '1314124',
    //     'longitude': '1231415',
    //     'price': '10'
    //   })
    //   .expect(401, done)
    // })
  })
})
