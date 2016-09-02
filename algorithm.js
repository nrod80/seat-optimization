//takes an array of current student locations and an object of the student pairs
module.exports = function(currentSeats, pairs) {


  console.log('currentSeats', currentSeats)
  console.log('PAIRS: ', pairs)

  //an object of each student's distance to a given seat
  let studentDistances = getDistances();

  //the array which will become the final place
  let finalPlacement = [];

  // determine each student's distance to the other students
  function getDistances() {

    let distances = {};

    currentSeats.forEach((student, index) => {
      let individualDistances = {};
      for (let i = 0; i < currentSeats.length; i++) {
        if (index > i && index - i < 7)
          individualDistances[i] = index - i;
        else if (index > i && index - i > 7)
          individualDistances[i] = 14 - (index - i)
        else if (index < i && i - index > 7)
          individualDistances[i] = 14 - (i - index)
        else
          individualDistances[i] = Math.abs(i - index)
      }
      distances[student] = individualDistances;

    })
    return distances;
  }


  //placing the students into their final spots
  currentSeats.forEach(function(student, index, array) {
    if (index % 2 && pairs[student] === array[index + 1]) {
      finalPlacement[index - 1] = student;
      finalPlacement[index] = array[index];
    } else if (index % 2) {
      finalPlacement[index - 1] = student;
      let temp = array[index];
      finalPlacement[index] = pairs[student];
      array[array.indexOf(pairs[student])] = temp;
    } else {
      return;
    }
  })

  let cost = 0;


  //calculate the cost of the final arrangement
  finalPlacement.forEach((student, index) => {
    console.log(studentDistances[student][index])
    cost += Number(studentDistances[student][index])
  })





  console.log('FINAL PLACEMENT: ', finalPlacement, finalPlacement.length)

  console.log('COST: ', cost)

}
