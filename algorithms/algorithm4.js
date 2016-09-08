let algo1 = require('./algorithm1');
let algo3 = require('./algorithm3');
let Pairs = require('../pairUtilities');
let cost = require('../cost')

let algo4 = function(currentSeats, pairs) {

  let costObj = {};

  for (i = 0; i < currentSeats.length; i++) {
    let finalPlacement = []

    if (i % 2 === 1) {
      finalPlacement = run(algo1, i, currentSeats, pairs)
    } else {
      finalPlacement = run(algo3, i, currentSeats, pairs)
    }
    costObj[cost(currentSeats, finalPlacement)] = finalPlacement


  }

  let lowestCost = Object.keys(costObj).sort()[0];

  return costObj[lowestCost]
}




function shiftPlacement(array, i) {
  for (var j = 0; j < (i * 2); j++) {
    array.push(array.shift())
  }
  return array;
}

function unshiftPlacement(array, i) {
  for (var j = 0; j < (i * 2); j++) {
    array.unshift(array.pop())
  }
  return array;
}


function run(algo, i, currentSeats, pairs) {
  shiftPlacement(currentSeats, i)

  let playCopy = currentSeats.slice();

  let finalPlacement = algo1(playCopy, pairs);

  finalPlacement = unshiftPlacement(finalPlacement, i)

  currentSeats = unshiftPlacement(currentSeats, i)

  return finalPlacement
}


module.exports = algo4
