// lunch.test.js

const supertest = require('supertest');
const app = require('../server');

const request = supertest(app);

it('Testing basic', async (done) => {
  const res = await request
    .get('/')
    .set('Content-Type', 'application/json')
    .send({ order: 'Lunch 1,2,3' });
  expect(res.status).toBe(200);
  expect(res.body.orderText).toBe('Salad, Chips, Soda');
  done();
});

it('Testing water', async (done) => {
  const res = await request
    .get('/')
    .set('Content-Type', 'application/json')
    .send({ order: 'Lunch 1,2' });
  expect(res.status).toBe(200);
  expect(res.body.orderText).toBe('Salad, Chips, Water');
  done();
});

it('Testing multiple sides', async (done) => {
  const res = await request
    .get('/')
    .set('Content-Type', 'application/json')
    .send({ order: 'Lunch 1,2,2' });
  expect(res.status).toBe(200);
  expect(res.body.orderText).toBe('Salad, Chips(2), Water');
  done();
});

it('Testing dessert', async (done) => {
  const res = await request
    .get('/')
    .set('Content-Type', 'application/json')
    .send({ order: 'Lunch 1,2,4' });
  expect(res.status).toBe(400);
  expect(res.body.orderText).toBe(
    'Unable to process. Cannot order Dessert for Lunch'
  );
  done();
});
