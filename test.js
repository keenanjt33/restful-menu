// test.js

const supertest = require('supertest');
const app = require('./server');

const request = supertest(app);

it('Testing Hello World', async (done) => {
  const res = await request.get('/');
  expect(res.status).toBe(200);
  expect(res.text).toBe('Hello World!');
  done();
});
