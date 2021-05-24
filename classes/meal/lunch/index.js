// classes/meal/lunch/index.js;

const Meal = require('../index');
const { LUNCH_MENU } = require('../../../data/menus');

class Lunch extends Meal {
  constructor(dishIDs) {
    super(dishIDs);
    this.menu = LUNCH_MENU;
  }

  checkForFailure() {
    if (this.main === 0) {
      this.failureMessage = 'Unable to process. Main is missing';
    } else if (this.side === 0) {
      this.failureMessage = 'Unable to process. Side is missing';
    } else if (this.main > 1) {
      this.failureMessage = 'Unable to process. Only one Main is allowed';
    } else if (this.drink > 1) {
      this.failureMessage = 'Unable to process. Only one Drink is allowed';
    } else if (this.dessert > 0) {
      this.failureMessage = 'Unable to process. Cannot order Dessert for Lunch';
    }
  }
}

module.exports = { Lunch };
