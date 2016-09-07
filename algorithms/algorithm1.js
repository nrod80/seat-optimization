'use strict';


module.exports = function(currentSeats, pairs) {
  const originalSeats = currentSeats.slice()

  //the array which will become the final place
  let finalPlacement = [];
  for (var i = 0; i < currentSeats.length; i++) {
    // skip each odd index
    if (i % 2 === 1) {
      continue
    } else if (pairs[currentSeats[i]] === currentSeats[i + 1]) {
      finalPlacement[i] = currentSeats[i];
      finalPlacement[i + 1] = currentSeats[i + 1];
    } else {
      finalPlacement[i] = currentSeats[i];
      let temp = currentSeats[i + 1];
      finalPlacement[i + 1] = pairs[currentSeats[i]];
      currentSeats[currentSeats.indexOf(pairs[currentSeats[i]])] = temp;
      currentSeats[i + 1] = pairs[currentSeats[i]]
    }
  }
  require('../cost')(originalSeats, finalPlacement)
  return finalPlacement
}
