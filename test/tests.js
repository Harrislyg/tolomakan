/* globals  describe it */

const expect = require('chai').expect
const supertest = require('supertest')
const app = require('../app')
// const port = process.env.PORT || 3000
const api = supertest('http://localhost:3000')

describe('GET /', () => {
  it('should return a 200 response', (done) => {
    api.get('/')
    .set('Accept', 'application/json')
    .expect(200, done)
  })
})

// POST /signup
describe('POST /signup', () => {
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
      'password': '123456'
    })
    .expect(401, done)
  })
})
