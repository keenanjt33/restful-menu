// classes/meal/breakfast/index.js;

const Meal = require('../index');
const { BREAKFAST_MENU } = require('../../../data/menus');

/*
 * Breakfast class.
 *
 * @constructor
 * @param {String} id - The id.
 * @param {Number} x  - The x coordinate.
 * @param {Number} y  - The y coordinate.
 */
class Breakfast extends Meal {
  constructor(dishIDs) {
    super();
    this.drink = 0;
    this.failureMessage = '';
    dishIDs.forEach((elt) => {
      switch (elt) {
        case 1:
          this.main += 1;
          break;
        case 2:
          this.side += 1;
          break;
        case 3:
          this.drink += 1;
          break;
        default:
          this.failureMessage = `Unable to process. ${elt} is not a valid Breakfast dish ID`;
          break;
      }
    });
  }

  getOrderText() {
    if (this.failureMessage) return this.failureMessage;
    // check breakfast order requirements
    if (this.main === 0) return 'Unable to process. Main is missing';
    if (this.side === 0) return 'Unable to process. Side is missing';
    if (this.main > 1) return 'Unable to process. Only one Main is allowed';
    if (this.side > 1) return 'Unable to process. Only one Side is allowed';
    // generate orderText
    let orderText = '';
    orderText += BREAKFAST_MENU.main.name;
    orderText += ', ';
    orderText += BREAKFAST_MENU.side.name;
    orderText += ', ';
    if (this.drink === 0) orderText += 'Water';
    else {
      orderText += BREAKFAST_MENU.drink.name;
      if (this.drink > 1) orderText += `(${this.drink})`;
    }
    return orderText;
  }
}

module.exports = { Breakfast };
// export default { Breakfast };
