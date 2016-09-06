const currentSeats = ['NickR', 'Doug', 'NickD', 'Kevin',
                      'Alex', 'ChrisL', 'Jessica', 'Yi',
                      'Ryan', 'Connie', 'Gio', 'Peter',
                      'ChrisC', 'Walter']

const perfectPairs = {
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

module.exports = {currentSeats, perfectPairs}

  // //an object of each student's distance to all seats
  // const studentDistances = getDistances();

  // // determine each student's distance to the other students
  // function getDistances() {
  //   let distances = {};
  //   currentSeats.forEach((student, index) => {
  //     let individualDistances = {};
  //     for (let i = 0; i < currentSeats.length; i++) {
  //       if (index > i && index - i < 7)
  //         individualDistances[i] = index - i;
  //       else if (index > i && index - i > 7)
  //         individualDistances[i] = 14 - (index - i)
  //       else if (index < i && i - index > 7)
  //         individualDistances[i] = 14 - (i - index)
  //       else
  //         individualDistances[i] = Math.abs(i - index)
  //     }
  //     distances[student] = individualDistances;

  //   })
  //   // console.log(distances)
  //   return distances;
  // }

  // let cost = 0;
  // //calculate the cost of the final arrangement
  // finalPlacement.forEach((student, index) => {
  //   // console.log(studentDistances[student][index])
  //   cost += Number(studentDistances[student][index])
  // })