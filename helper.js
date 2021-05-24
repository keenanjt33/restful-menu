// helper.js

/*
 * Parses input string and returns object containing meal class and an array
 *   of dish ID integers
 * Note: requires that meal does not contain any numerical digits
 * @param (String) input is a string of format `${meal} ${dishId1},..,${dishIdN}`
 * @return (Obj) { mealType: (String), dishes: Array[Int] }
 */
const parseInput = (input) => {
  // strip all whitespace
  const textStripped = input.replace(/\s+/g, '');

  // split input into meal type string and dish ID string array
  let firstDigitIndex = textStripped.search(/\d/);
  if (firstDigitIndex === -1) {
    firstDigitIndex = textStripped.length;
  }
  const mealType = textStripped.substring(0, firstDigitIndex).toUpperCase();
  const dishesStr = textStripped.substring(firstDigitIndex);
  const dishesStrArr = dishesStr.split(',');
  let dishIDs = [];
  let idInt = NaN;
  // cast IDs to int, leaving dishIDs as [] on failure
  try {
    dishesStrArr.forEach((dish) => {
      idInt = parseInt(dish, 10);
      if (Number.isNaN(idInt)) {
        throw Error;
      }
      dishIDs.push(idInt);
    });
  } catch (e) {
    dishIDs = [];
  }
  return {
    mealType,
    dishIDs,
  };
};

module.exports = parseInput;
// export default { parseInput };
