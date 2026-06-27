// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name) {
    case "Pure Strawberry Joy":
      return 0.5;
    case "Energizer":
      return 1.5;
    case "Green Garden":
      return 1.5;
    case "Tropical Island":
      return 3;
    case "All or Nothing":
      return 5;
    default:
      return 2.5;
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let limesAvailable = limes.length;
  let totalWedges = 0;
  let limesUsed = 0;
  while (totalWedges < wedgesNeeded) {
    if (limes.length === 0) {
      return limesAvailable;
    }
    const lime = limes.shift();
    if (lime === "small") {
      totalWedges += 6;
    } else if (lime === "medium") {
      totalWedges += 8;
    } else {
      totalWedges += 10;
    }
    limesUsed++;
  }
  return limesUsed;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let timePassed = 0;
  while (timePassed < timeLeft) {
    let drink = orders.shift();
    timePassed += timeToMixJuice(drink);
  }
  return orders;
}
