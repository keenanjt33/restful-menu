// classes/meal/index.js;

class Meal {
  constructor(dishIDs) {
    this.main = 0;
    this.side = 0;
    this.drink = 0;
    this.dessert = 0;
    this.water = 0;
    this.status = 400;
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
        case 4:
          this.dessert += 1;
          break;
        default:
          this.failureMessage = `Unable to process. ${elt} is not a valid dish ID`;
          break;
      }
    });
  }

  getStatus() {
    return this.status;
  }

  getOrderText() {
    this.checkForFailure();
    if (this.failureMessage) return this.failureMessage;

    this.status = 200;
    let orderText = '';
    orderText += this.menu.main.name;
    if (this.main > 1) orderText += `(${this.main})`;
    orderText += ', ';
    orderText += this.menu.side.name;
    if (this.side > 1) orderText += `(${this.side})`;
    orderText += ', ';
    if (this.drink === 0) orderText += 'Water';
    else {
      orderText += this.menu.drink.name;
      if (this.drink > 1) orderText += `(${this.drink})`;
    }
    if (this.water === 1 && this.drink > 0) orderText += ', Water';
    if (this.dessert > 0) {
      orderText += ', ';
      if (!Object.prototype.hasOwnProperty.call(this.menu, 'dessert')) {
        this.status = 400;
        return 'Unable to process. No dessert on menu';
      }
      orderText += this.menu.dessert.name;
      if (this.dessert > 1) orderText += `(${this.dessert})`;
    }
    return orderText;
  }
}

module.exports = Meal;
