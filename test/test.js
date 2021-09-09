const request = require('supertest');
const app = require('../server');
const Student = require('../src/models').Student;

describe('Sample Test', () => {
  it('should test that true === true', () => {
    expect(true).toBe(true)
  })
})

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
        token = response.body.token; // save the token!
        done();
      });
  });
  // token not being sent - should respond with a 401
  test('It should require authorization', () => {
    request(app)
      .get('/students')
      .expect(401)
  });
  // send the token - should respond with a 200
  test('It responds with 200', () => {
    request(app)
      .get('/students')
      .set('Authorization', `Bearer ${token}`)
      .expect(200)
  });

  // test('Should save student to db', async(done) => {
  //   await request(app)
  //     .post('/students').send({
  //       firstName: 'test',
  //       lastName: 'test',
  //       grade: 5,
  //       language: 'KZ',
  //       parentsContacts: 'ok',
  //       status: 'В ожидании',
  //       stream: 1
  //     })
  //     .set('Authorization', `Bearer ${token}`)

  //   const student = await Student.findOne({ firstName: 'test' });
  //   console.log('student', student);
  //   expect(student.firstName).toBeTruthy();
  //   done();
  // })
});