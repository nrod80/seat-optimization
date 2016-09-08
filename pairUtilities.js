var Pairs = {};

Pairs.currentSeats = ['NickR', 'Doug', 'NickD', 'Kevin',
  'Alex', 'ChrisL', 'Jessica', 'Yi',
  'Ryan', 'Connie', 'Gio', 'Peter',
  'ChrisC', 'Walter'
]

Pairs.perfectPairs = {
  NickR: 'Doug',
  Doug: 'NickR',
  NickD: 'Kevin',
  Kevin: 'NickD',
  Alex: 'ChrisL',
  ChrisL: 'Alex',
  Jessica: 'Yi',
  Yi: 'Jessica',
  Ryan: 'Connie',
  Connie: 'Ryan',
  Gio: 'Peter',
  Peter: 'Gio',
  ChrisC: 'Walter',
  Walter: 'ChrisC'
}

Pairs.randomPairs = function() {
  return getRandomPairs(Pairs.currentSeats.slice())
}

function getRandomPairs(studentArrayToShuffle) {
  let pairs = {};

  shuffle(studentArrayToShuffle).forEach(function(student, index, mixedArray) {
    if (index % 2 === 0) {
      pairs[student] = mixedArray[index + 1]
    } else {
      pairs[student] = mixedArray[index - 1]
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



module.exports = Pairs
