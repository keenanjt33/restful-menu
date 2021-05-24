// classes/meal/index.js;

/**
 * Meal class.
 *
 * @constructor
 * @param (Array<Int>) dishIds
 */
class Meal {
  constructor() {
    this.main = 0;
    this.side = 0;
    this.status = 400;
  }

  getStatus() {
    return this.status;
  }
}

module.exports = Meal;
// export default { Meal };
