// server.js

const express = require('express');
const parseInput = require('./helper');
const { Breakfast } = require('./classes/meal/breakfast');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  if (!req.body || !Object.prototype.hasOwnProperty.call(req.body, 'order')) {
    return res
      .status(400)
      .json({ orderText: 'Unable to process. No meal specified' });
  }
  const { mealType, dishIDs } = parseInput(req.body.order);
  let orderText = '';
  let order = null;
  switch (mealType) {
    case 'BREAKFAST':
      order = new Breakfast(dishIDs);
      break;
    case 'LUNCH':
      break;
    case 'DINNER':
      break;
    default:
      return res
        .status(400)
        .json({ orderText: 'Unable to process. Meal type is missing' });
  }
  orderText = order.getOrderText();
  // const orderText = order.getOrderText();
  return res.status(200).json({ orderText });
});

module.exports = app;
