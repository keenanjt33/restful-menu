// classes/meal/breakfast/index.js;

const Meal = require('../index');
const { BREAKFAST_MENU } = require('../../../data/menus');

class Breakfast extends Meal {
  constructor(dishIDs) {
    super(dishIDs);
    this.menu = BREAKFAST_MENU;
  }

  checkForFailure() {
    if (this.main === 0) {
      this.failureMessage = 'Unable to process. Main is missing';
    } else if (this.side === 0) {
      this.failureMessage = 'Unable to process. Side is missing';
    } else if (this.main > 1) {
      this.failureMessage = 'Unable to process. Only one Main is allowed';
    } else if (this.side > 1) {
      this.failureMessage = 'Unable to process. Only one Side is allowed';
    } else if (this.dessert > 0) {
      this.failureMessage =
        'Unable to process. Cannot order Dessert for Breakfast';
    }
  }
}

module.exports = { Breakfast };
