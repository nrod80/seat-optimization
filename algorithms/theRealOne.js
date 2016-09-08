var cost = require('../cost');
module.exports = function(currentSeats, pairs) {

  const originalSeats = currentSeats.slice();
  let finalPlacements = [];
  let counter = 0;

    mapFinal(0)
    cost(originalSeats, finalPlacements)

  return finalPlacements;

  function mapFinal(startIdx) {
    if (counter === 7) return

    while (finalPlacements[startIdx] !== undefined) {
      if (startIdx === 13) startIdx = 0
      startIdx++;
    }

    if (startIdx % 2 === 0) {
      finalPlacements[startIdx] = currentSeats[startIdx]
      finalPlacements[startIdx + 1] = pairs[currentSeats[startIdx]]
    } else {
      finalPlacements[startIdx] = currentSeats[startIdx]
      finalPlacements[startIdx - 1] = pairs[currentSeats[startIdx]]
    }

    let nextIndex = currentSeats.indexOf(pairs[currentSeats[startIdx]])
    if (nextIndex % 2 === 0) nextIndex++;
    else nextIndex--;

    counter++;
    mapFinal(nextIndex)

  }
}
