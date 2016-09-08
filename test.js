/* eslint-disable no-unused-expressions */
'use strict';

const expect = require('chai').expect;

const utils = require('./pairUtilities');
const getRandomPairs = utils.randomPairs
const chalk = require('chalk')
const columnify = require('columnify')

// change algorithm1 to your new file
const optimize = require('./algorithms/algorithm1')


let randomPairs, finalPlacement;

describe('seat optimization', function(){
  describe('consistently returns an array that', function(){
    function getOptimizedObj(){
      randomPairs = getRandomPairs(utils.currentSeats.slice())
      finalPlacement = optimize(utils.currentSeats.slice(), randomPairs)
      return {currentSeats: utils.currentSeats.slice(), randomPairs, finalPlacement}
    }


    it('has a length of 14', function(){
      let lengthArr = [];
      for (let i = 0; i < 20000; i++){
        lengthArr.push(getOptimizedObj().finalPlacement.length)
      }
      expect(lengthArr.every(length => length === 14)).to.be.true;
    })

    it('has all unique values', function(){
      let valueBucket = [];
      for (let i = 0; i < 20000; i++){
        valueBucket.push(getOptimizedObj().finalPlacement)
      }
      expect(
        valueBucket.every(fP => fP.every((name, idx, arr) => {
          let tempArray = arr.slice()
          tempArray.splice(idx)
          if(tempArray.includes(name)) return false;
          return true;
        }))
      ).to.be.true;

    })

    it('correctly sits everyone next to their partner', function(){
      let valueBucket = [];
      for (let i = 0; i < 20000; i++){
        valueBucket.push(getOptimizedObj())
      }
      expect(
        valueBucket.every(finalObj => {
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
      let valueBucket = [];
      for (let i = 0; i < 20000; i++){
        valueBucket.push(getOptimizedObj())
      }
      expect(
        valueBucket.every(finalObj => {
          let stayedInSeats = finalObj.finalPlacement.reduce((prev, name, idx) => {
            if (finalObj.currentSeats[idx] === finalObj.finalPlacement[idx]) return ++prev;
            return prev;
          }, 0)
          if (stayedInSeats >= 7) return true;
          // uncomment line below to log before and after seats that is not >= 7
          // console.log(chalk.red(columnify(objectifier(finalObj))))
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





