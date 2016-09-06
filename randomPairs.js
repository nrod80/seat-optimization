'use strict';


function getRandomPairs(studentArrayToShuffle) {
  let pairs = {};
  
  shuffle(studentArrayToShuffle).forEach(function(student, index, mixedArray) {
    if (index % 2 === 0) {
      pairs[student] = mixedArray[index+1]
    }
    else {
     pairs[student] = mixedArray[index-1]
    }
  })
  return pairs;
}

function shuffle(array) {
  let currentIndex = array.length,
    temporaryValue, randomIndex

  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

module.exports = getRandomPairs

