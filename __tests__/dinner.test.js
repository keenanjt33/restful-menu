// lunch.test.js

const supertest = require('supertest');
const app = require('../server');

const request = supertest(app);

it('Testing basic', async (done) => {
  const res = await request
    .get('/')
    .set('Content-Type', 'application/json')
    .send({ order: 'Dinner 1,2,3,4' });
  expect(res.status).toBe(200);
  expect(res.body.orderText).toBe('Steak, Potatoes, Wine, Water, Cake');
  done();
});

it('Testing no drink', async (done) => {
  const res = await request
    .get('/')
    .set('Content-Type', 'application/json')
    .send({ order: 'Dinner 1,2,4' });
  expect(res.status).toBe(200);
  expect(res.body.orderText).toBe('Steak, Potatoes, Water, Cake');
  done();
});
