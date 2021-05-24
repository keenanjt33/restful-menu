// server.test.js

const supertest = require('supertest');
const app = require('../server');

const request = supertest(app);

it('Testing basic', async (done) => {
  const res = await request
    .get('/')
    .set('Content-Type', 'application/json')
    .send({ order: 'Breakfast 1,2,3' });
  expect(res.status).toBe(200);
  expect(res.body.orderText).toBe('Eggs, Toast, Coffee');
  done();
});

it('Testing multiple coffees', async (done) => {
  const res = await request
    .get('/')
    .set('Content-Type', 'application/json')
    .send({ order: 'Breakfast 3,1,2,3' });
  expect(res.status).toBe(200);
  expect(res.body.orderText).toBe('Eggs, Toast, Coffee(2)');
  done();
});

it('Testing no mains', async (done) => {
  const res = await request
    .get('/')
    .set('Content-Type', 'application/json')
    .send({ order: 'Breakfast 2,3' });
  expect(res.status).toBe(200);
  expect(res.body.orderText).toBe('Unable to process. Main is missing');
  done();
});
