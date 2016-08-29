//an Array(14) of the students in the classroom
const studentArray = ['NickR', 'Doug', 'NickD', 'Kevin', 'Alex', 'ChrisL', 'Jessica', 'Yi', 'Ryan', 'Connie', 'Gio', 'Peter', 'ChrisC', 'Walter']

let studentDistances = {};

// determine each student's distance to the other students
function getDistances() {
  studentArray.forEach((student, index) => {
    let distances = {};
    for (let i = 0; i < studentArray.length; i++) {
      if (index > i && index - i < 7)
        distances[studentArray[i]] = index - i;
      else if (index > i && index - i > 7)
        distances[studentArray[i]] = 14 - (index - i)
      else if (index < i && i - index > 7)
        distances[studentArray[i]] = 14 - (i - index)
      else
        distances[studentArray[i]] = Math.abs(i - index)
    }

    studentDistances[student] = distances;

  })
}

function getPairs() {

  //an algorithm to shuffle the array of students in place

  let randomPairs = shuffle(studentArray)

  //an object of the pairs
  let pairs = {};
  pairs['pair1'] = [randomPairs[0], randomPairs[1]]
  pairs['pair2'] = [randomPairs[2], randomPairs[3]]
  pairs['pair3'] = [randomPairs[4], randomPairs[5]]
  pairs['pair4'] = [randomPairs[6], randomPairs[7]]
  pairs['pair5'] = [randomPairs[8], randomPairs[9]]
  pairs['pair6'] = [randomPairs[10], randomPairs[11]]
  pairs['pair7'] = [randomPairs[12], randomPairs[13]]
}

function shuffle(array) {
  let currentIndex = array.length,
    temporaryValue, randomIndex;

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
