var assert = require('assert');
const request = require('supertest');
const app = require ('../app');

describe('USERS GET', function() {
  it('GET all users', function(done) {
    request(app)
      .get('/users')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        done(); });
      });
});

describe('USERS GET', function() {
  it('GET an user by id', function(done) {
    request(app)
      .get('/users/2')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        done(); });
      });
});

describe('USERS GET', function() {
  it('GET an user by negative id', function(done) {
    request(app)
      .get('/users/-1')
      .expect(404)
      .end(function(err, res) {
        if (err) return done(err);
        done(); });
      });
});

describe('USERS GET', function() {
  it('GET an user by un unexistent id', function(done) {
    request(app)
      .get('/users/1000')
      .expect(404)
      .end(function(err, res) {
        if (err) return done(err);
        done(); });
      });
});

describe('USERS GET', function() {
  it('GET an uder by NaN', function(done) {
    request(app)
      .get('/users/mat32ia')
      .expect(404)
      .end(function(err, res) {
        if (err) return done(err);
        done(); });
      });
});

describe('USERS POST', function() {
  it('POST an user', function(done) {
    request(app)
      .post('/users')
      .set('Accept', 'application/json')
      .send ({name : 'caino', surname: 'abele', dateOfBirth: '15-12-12', email: 'cainoeabele@gmail.com'})
      .expect(201)
      .end(function(err, res) {
        if (err) return done(err);
        done(); });
      });
});

describe('USERS POST', function() {
  it('POST an user with no camps', function(done) {
    request(app)
      .post('/users')
      .set('Accept', 'application/json')
      .send ({ })
      .expect(400)
      .end(function(err, res) {
        if (err) return done(err);
        done(); });
      });
});

describe('USERS POST', function() {
  it('POST an user with no name', function(done) {
    request(app)
      .post('/users')
      .set('Accept', 'application/json')
      .send ({surname: 'abele', email: 'cainoeabele@gmail.com'})
      .expect(400)
      .end(function(err, res) {
        if (err) return done(err);
        done(); });
      });
});

describe('USERS POST', function() {
  it('POST an user with only name', function(done) {
    request(app)
      .post('/users')
      .set('Accept', 'application/json')
      .send ({name: 'caino'})
      .expect(400)
      .end(function(err, res) {
        if (err) return done(err);
        done(); });
      });
});

describe('USERS DELETE', function() {
  it('DELETE an user by id', function(done) {
    request(app)
      .delete('/users/3')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        done(); });
      });
});

describe('USERS DELETE', function() {
  it('DELETE an user by unexistent id', function(done) {
    request(app)
      .delete('/users/1000')
      .set('Accept', 'application/json')
      .expect(404)
      .end(function(err, res) {
        if (err) return done(err);
        done(); });
      });
});

describe('USERS DELETE', function() {
  it('DELETE an user by NaN', function(done) {
    request(app)
      .delete('/users/10senj0')
      .set('Accept', 'application/json')
      .expect(404)
      .end(function(err, res) {
        if (err) return done(err);
        done(); });
      });
});

describe('USERS PUT', function() {
  it('PUT an user by id', function(done) {
    request(app)
      .put('/users/2')
      .set('Accept', 'application/json')
      .send({name : 'caino', surname: 'abele', email: 'cainoeabele@gmail.com'})
      .expect(201)
      .end(function(err, res) {
        if (err) return done(err);
        done(); });
      });
});

describe('USERS PUT', function() {
  it('PUT an user by id with 1 camp', function(done) {
    request(app)
      .put('/users/2')
      .set('Accept', 'application/json')
      .send({name : 'caino'})
      .expect(201)
      .end(function(err, res) {
        if (err) return done(err);
        done(); });
      });
});

describe('USERS PUT', function() {
  it('PUT an user by id with 2 camps', function(done) {
    request(app)
      .put('/users/2')
      .set('Accept', 'application/json')
      .send({name : 'caino', email: 'cainoeabele@gmail.com'})
      .expect(201)
      .end(function(err, res) {
        if (err) return done(err);
        done(); });
      });
});

describe('USERS PUT', function() {
  it('PUT an user with unexistent id', function(done) {
    request(app)
      .put('/users/100000')
      .set('Accept', 'application/json')
      .send({name : 'caino', surname: 'abele', email: 'cainoeabele@gmail.com'})
      .expect(404)
      .end(function(err, res) {
        if (err) return done(err);
        done(); });
      });
});

describe('USERS PUT', function() {
  it('PUT an user with NaN', function(done) {
    request(app)
      .put('/users/dgy3dbvy4')
      .set('Accept', 'application/json')
      .send({name : 'caino', surname: 'abele', email: 'cainoeabele@gmail.com'})
      .expect(404)
      .end(function(err, res) {
        if (err) return done(err);
        done(); });
      });
});

describe('USERS PUT', function() {
  it('PUT an user by id with no camps', function(done) {
    request(app)
      .put('/users/2')
      .set('Accept', 'application/json')
      .send({ })
      .expect(404)
      .end(function(err, res) {
        if (err) return done(err);
        done(); });
      });
});

describe('USERS PUT', function() {
  it('PUT an user with invalid id and body', function(done) {
    request(app)
      .put('/users/dgy3dbvy4')
      .set('Accept', 'application/json')
      .send({ })
      .expect(404)
      .end(function(err, res) {
        if (err) return done(err);
        done(); });
      });
});

describe('USERS RESET', function() {
  it('RESET all users', function(done) {
    request(app)
      .put('/users')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        done(); });
      });
});
