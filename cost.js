var fs = require('fs')

module.exports = function(originalSeats, finalSeats) {
  var cost = 0;
  originalSeats.forEach((student, index) => {
    let finalIdx = finalSeats.indexOf(student);
    if (index !== finalIdx) cost += 5;
    if (index > finalIdx && index - finalIdx < 7) {
      cost += index - finalIdx;
    }
    else if (index > finalIdx && index - finalIdx > 7) {
      cost += 14 - (index - finalIdx)
    }
    else if (index < finalIdx && finalIdx - index > 7) {
      cost += 14 - (finalIdx - index)
    }
    else {
      cost += Math.abs(finalIdx - index)
    }
  })

  fs.appendFile('./history.txt', cost + '\n')
  return cost
}

