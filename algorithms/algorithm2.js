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




















// module.exports = function(currentSeats, pairs) {

//   let originalSeats = currentSeats.slice()
//   let costArr = [];
//   let finalPlacement = [];

//   for (var i = 0; i < currentSeats.length; i++) {
//     // let temp = currentSeats.shift()
//     // currentSeats = currentSeats.push(temp)
//     // console.dir(typeof currentSeats)

//     //the array which will become the final place
//     finalPlacement = [];
//     for (var i = 0; i < currentSeats.length; i++) {

//       var currentSeatsCopy = currentSeats.slice()
//       // skip each odd index
//       if (i % 2 === 1) {
//         continue
//       } else if (pairs[currentSeatsCopy[i]] === currentSeatsCopy[i + 1]) {
//         finalPlacement[i] = currentSeatsCopy[i];
//         finalPlacement[i + 1] = currentSeatsCopy[i + 1];
//       } else {
//         finalPlacement[i] = currentSeatsCopy[i];
//         let temp = currentSeatsCopy[i + 1];
//         finalPlacement[i + 1] = pairs[currentSeatsCopy[i]];
//         currentSeatsCopy[currentSeatsCopy.indexOf(pairs[currentSeatsCopy[i]])] = temp;
//         currentSeatsCopy[i + 1] = pairs[currentSeatsCopy[i]]
//       }
//     }
//     costArr.push(require('../cost')(originalSeats, finalPlacement))
//   }


//   console.log(finalPlacement)
//     return finalPlacement
// }
