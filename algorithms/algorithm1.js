'use strict';


module.exports = function (currentSeats, pairs) {
  //the array which will become the final place
  let finalPlacement = [];
  let currentSeatsCopy = currentSeats.slice(0);

  currentSeats.forEach(function(_, index) {
    // skip each odd index
    if(index % 2===1) return;

    if (pairs[currentSeatsCopy[index]] === currentSeatsCopy[index + 1]) {
      finalPlacement[index] = currentSeatsCopy[index];
      finalPlacement[index + 1] = currentSeatsCopy[index + 1];
    } else {
      finalPlacement[index] = currentSeatsCopy[index];
      let temp = currentSeatsCopy[index + 1];
      finalPlacement[index + 1] = pairs[currentSeatsCopy[index]];
      currentSeatsCopy[currentSeatsCopy.indexOf(pairs[currentSeatsCopy[index]])] = temp;
      currentSeatsCopy[index + 1] = pairs[currentSeatsCopy[index]]
    }
  }) 

  return finalPlacement
}


