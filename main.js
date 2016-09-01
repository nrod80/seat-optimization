//an Array(14) of the students in the classroom
const studentArray = ['NickR', 'Doug', 'NickD', 'Kevin', 'Alex', 'ChrisL', 'Jessica', 'Yi', 'Ryan', 'Connie', 'Gio', 'Peter', 'ChrisC', 'Walter']
//the array to mutate to produce the random pairs
let studentArrayToShuffle = ['NickR', 'Doug', 'NickD', 'Kevin', 'Alex', 'ChrisL', 'Jessica', 'Yi', 'Ryan', 'Connie', 'Gio', 'Peter', 'ChrisC', 'Walter']

//the function that returns the randomly generated pairs
function getPairs() {

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

  //an algorithm to shuffle the array of students in place
function shuffle(array) {
  let currentIndex = array.length,
    temporaryValue, randomIndex

  // While there remain elements to shuffle...
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

var results = require('./algorithm')(studentArray, getPairs())
