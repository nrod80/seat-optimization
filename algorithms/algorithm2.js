let algo1 = require('./algorithm1');
let Pairs = require('../pairUtilities');
let cost = require('../cost')

let algo2 = function(currentSeats, pairs) {

  let costObj = {};

  for (i = 0; i < currentSeats.length / 2; i++) {

    shiftPlacement(currentSeats, i)

    let playCopy = currentSeats.slice();

    let finalPlacement = algo1(playCopy, pairs);

    finaPlacement = unshiftPlacement(finalPlacement, i)

    currentSeats = unshiftPlacement(currentSeats, i)

    costObj[cost(currentSeats, finalPlacement)] = finalPlacement

  }

  let lowestCost = Object.keys(costObj).sort()[0];

  return costObj[lowestCost]
}


function shiftPlacement(array, i) {
  for(var j = 0; j < (i * 2); j++ ) {
    array.push(array.shift())
  }
  return array;
}

function unshiftPlacement(array, i) {
  for(var j = 0; j < (i * 2); j++ ) {
    array.unshift(array.pop())
  }
  return array;
}


module.exports = algo2
