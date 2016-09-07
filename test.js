const expect = require('chai').expect;

const utils = require('./pairUtilities');
let currentSeats = utils.currentSeats.slice();
const getRandomPairs = require('./randomPairs');

// change algorithm1 to your new file
const optimize = require('./algorithms/algorithm1')

let randomPairs, finalPlacement;

describe('seat optimization', function(){
  describe('returns an array that', function(){
    beforeEach(function(){
      randomPairs = getRandomPairs(utils.currentSeats.slice())
      finalPlacement = optimize(utils.currentSeats.slice(), randomPairs)
    })

    it('has a length of 14', function(){
      expect(finalPlacement).to.have.lengthOf(14);
    })

    it('has all unique values', function(){
      let valueBucket = [];
      finalPlacement.forEach(name =>{
        expect(valueBucket.includes(name)).to.be.false;
        valueBucket.push(name)
      })
    })

    it('correctly sits everyone next to their partner', function(){
      finalPlacement.forEach((name, idx) =>{
        if (idx % 2 === 0){
          expect(randomPairs[name]).to.equal(finalPlacement[idx + 1])
        } else {
          expect(randomPairs[name]).to.equal(finalPlacement[idx - 1])
        }
      })
    })

    it('keeps at least 7 people sitting', function(){
      let remainSittingCounter = 0;
      for(let i = 0; i < finalPlacement.length; i++){
        if (finalPlacement[i] === currentSeats[i]) remainSittingCounter++;
      }
      expect(remainSittingCounter).to.be.above(7)
    })

    // Spec broken
    it("doesn't modify perfect pairings", function(){
      finalPlacement = optimize(utils.currentSeats, utils.perfectPairs)
      for(let i = 0; i < finalPlacement.length; i++){
        expect(finalPlacement[i]).to.equal(utils.currentSeats[i])
      }
    })
  })
})
