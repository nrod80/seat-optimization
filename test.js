/* eslint-disable no-unused-expressions */
'use strict';

const expect = require('chai').expect;

const utils = require('./pairUtilities');
const getRandomPairs = utils.randomPairs
const logger = require('./logger')

// change algorithm1 to your new file
const optimize = require('./algorithms/theRealOne')


let randomPairs, finalPlacement;

describe('seat optimization', function(){
  let resultsArr = [];
  function getOptimizedObj(){
    randomPairs = getRandomPairs(utils.currentSeats.slice())
    finalPlacement = optimize(utils.currentSeats.slice(), randomPairs)
    return {currentSeats: utils.currentSeats.slice(), randomPairs, finalPlacement}
  }

    console.log(`Below is a specific example of your algorithm at work;\nErrors found in test suite may not be represented here`)
    logger(optimize)
  before(function(){
    for (let i = 0; i < 25000; i++){
      resultsArr.push(getOptimizedObj())
    }
  })

  describe('consistently returns an array that', function(){

    it('has a length of 14', function(){
      expect(resultsArr.every(result => result.finalPlacement.length === 14)).to.be.true;
    })

    it('has all unique values', function(){
      expect(
        resultsArr.every(results => 
          results.finalPlacement.every((name, idx, arr) => {
            let tempArray = arr.slice()
            tempArray.splice(idx)
            if(tempArray.includes(name)) return false;
            return true;
          }))
      ).to.be.true;
    })

    it('places people next to their partner', function(){
      expect(
        resultsArr.every(finalObj => {
          return finalObj.finalPlacement.every((name, idx) => {
            if (idx % 2 === 0){
              if(finalObj.randomPairs[name] === finalObj.finalPlacement[idx + 1]) return true;
            } else {
              if(finalObj.randomPairs[name] === finalObj.finalPlacement[idx - 1]) return true;
            }
            return false
          })
        })
      ).to.be.true;
    })

    function objectifier(finalObj){
      let tidyObj = {}
      finalObj.currentSeats.forEach(( name,idx) => tidyObj[name] = finalObj.finalPlacement[idx])
      return tidyObj
    }

    it('keeps at least 7 people sitting', function(){
      expect(
        resultsArr.every(finalObj => {
          let stayedInSeats = finalObj.finalPlacement.reduce((prev, name, idx) => {
            if (finalObj.currentSeats[idx] === finalObj.finalPlacement[idx]) return ++prev;
            return prev;
          }, 0)
          if (stayedInSeats >= 7) return true;
          //
          return false
        })
      ).to.be.true;
    })

    it("doesn't modify perfect pairings", function(){
      finalPlacement = optimize(utils.currentSeats, utils.perfectPairs)
      for(let i = 0; i < finalPlacement.length; i++){
        expect(finalPlacement[i]).to.equal(utils.currentSeats[i])
      }
    })
  })
})