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
  expect(res.status).toBe(400);
  expect(res.body.orderText).toBe('Unable to process. Main is missing');
  done();
});

it('Testing invalid dish ID', async (done) => {
  const res = await request
    .get('/')
    .set('Content-Type', 'application/json')
    .send({ order: 'Breakfast 1,2,4' });
  expect(res.status).toBe(400);
  expect(res.body.orderText).toBe(
    'Unable to process. 4 is not a valid Breakfast dish ID'
  );
  done();
});

it('Testing no drink', async (done) => {
  const res = await request
    .get('/')
    .set('Content-Type', 'application/json')
    .send({ order: 'Breakfast 1,2' });
  expect(res.status).toBe(200);
  expect(res.body.orderText).toBe('Eggs, Toast, Water');
  done();
});

it('Testing multiple sides', async (done) => {
  const res = await request
    .get('/')
    .set('Content-Type', 'application/json')
    .send({ order: 'Breakfast 1,2,2,3' });
  expect(res.status).toBe(400);
  expect(res.body.orderText).toBe(
    'Unable to process. Only one Side is allowed'
  );
  done();
});
