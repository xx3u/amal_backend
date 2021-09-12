const request = require('supertest');
const app = require('../server');

afterEach(() => app.close());

describe('GET /', () => {
  let token;
  beforeAll((done) => {
    request(app)
      .post('/login')
      .send({
        username: 'admin1',
        password: 'admin1',
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