const BREAKFAST_MENU = {
  main: {
    name: 'Eggs',
    required: true,
    multiple: false,
  },
  side: {
    type: 'Side',
    name: 'Toast',
    required: true,
    multiple: false,
  },
  drink: {
    type: 'Drink',
    name: 'Coffee',
    required: false,
    multiple: true,
  },
};

const LUNCH_MENU = {
  main: {
    name: 'Salad',
    required: true,
    multiple: false,
  },
  side: {
    name: 'Chips',
    required: true,
    multiple: true,
  },
  drink: {
    name: 'Soda',
    required: false,
    multiple: false,
  },
};

const DINNER_MENU = {
  main: {
    name: 'Steak',
    required: true,
    multiple: false,
  },
  side: {
    name: 'Potatoes',
    required: true,
    multiple: false,
  },
  drink: {
    name: 'Wine',
    required: false,
    multiple: false,
  },
  dessert: {
    name: 'Cake',
    required: true,
    multiple: false,
  },
};

module.exports = { BREAKFAST_MENU, LUNCH_MENU, DINNER_MENU };
