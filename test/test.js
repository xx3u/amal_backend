const request = require('supertest');
const app = require('../server');
const Student = require('../src/models').Student;

describe('Sample Test', () => {
  it('should test that true === true', () => {
    expect(true).toBe(true)
  })
})

afterEach(() => app.close());

describe('GET /', () => {
  let token;
  beforeAll((done) => {
    request(app)
      .post('/login')
      .send({
        username: 'admin',
        password: 'qwerty123',
      })
      .end((err, response) => {
        token = response.body.token;
        done();
      });
  });

  test('It should require authorization', () => {
    request(app)
      .get('/students')
      .expect(401)
  });

  test('It responds with 200', () => {
    request(app)
      .get('/students')
      .set('Authorization', `Bearer ${token}`)
      .expect(200)
  });

});