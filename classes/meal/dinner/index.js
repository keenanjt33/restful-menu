// classes/meal/dinner/index.js;

const Meal = require('../index');
const { DINNER_MENU } = require('../../../data/menus');

class Dinner extends Meal {
  constructor(dishIDs) {
    super(dishIDs);
    this.menu = DINNER_MENU;
    this.water = 1;
  }

  checkForFailure() {
    if (this.main === 0) {
      this.failureMessage = 'Unable to process. Main is missing';
    } else if (this.side === 0) {
      this.failureMessage = 'Unable to process. Side is missing';
    } else if (this.dessert === 0) {
      this.failureMessage = 'Unable to process. Dessert is missing';
    } else if (this.main > 1) {
      this.failureMessage = 'Unable to process. Only one Main is allowed';
    } else if (this.side > 1) {
      this.failureMessage = 'Unable to process. Only one Side is allowed';
    } else if (this.drink > 1) {
      this.failureMessage = 'Unable to process. Only one Drink is allowed';
    } else if (this.dessert > 1) {
      this.failureMessage = 'Unable to process. Only one Dessert is allowed';
    }
  }
}

module.exports = { Dinner };
