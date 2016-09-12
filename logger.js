/* eslint-disable no-unused-expressions */
'use strict';

const utils = require('./pairUtilities');
const getRandomPairs = utils.randomPairs;

const chalk = require('chalk')
const columnify = require('columnify')

// const optimize = require('./algorithms/theRealOne')

module.exports = function(optimize){


	// returns individual cost
	function helperCost(name){
		let origIdx = this.currentSeats.indexOf(name);
		let finalIdx = this.finalPlacement.indexOf(name);
		let result = Math.abs(finalIdx - origIdx)
		if (result > 6) result = Math.abs( (result - 7) - 7 )
		return result || ' ■ '  //'← → ↑ ↓'
	 }

	function directionFinder(name){
		let origIdx = this.currentSeats.indexOf(name);
		let finalIdx = this.finalPlacement.indexOf(name);
		let result = Math.abs(finalIdx - origIdx)
		if (result > 6) result = (result - 7) - 7
		if (!result) return '→'
		return result > 0 ? '↓' : '↑' 
	}

	function getOptimizedObj(){
		let randomPairs = getRandomPairs(utils.currentSeats.slice())
		let finalPlacement = optimize(utils.currentSeats.slice(), randomPairs)
		return {currentSeats: utils.currentSeats.slice(), randomPairs, finalPlacement}
	}
	let results = getOptimizedObj();

	function Organize(results){
		let semiArr = [];
		let currentObj = {};
		let tempArr = [];
		for (var i = 0; i < 14; i++){
			let correct = false;
			if (i % 2 === 0){
				if (results.randomPairs[results.finalPlacement[i]] === results.finalPlacement[i + 1]) correct = true;
			} else if (results.randomPairs[results.finalPlacement[i]] === results.finalPlacement[i - 1]) correct = true;

			let finalSeat = results.finalPlacement[i]
			if (correct) finalSeat = chalk.green(finalSeat);
			else finalSeat = chalk.red(finalSeat)


			let costIndi = helperCost.call(results, results.finalPlacement[i])
			let direction = directionFinder.call(results, results.finalPlacement[i])
			currentObj = {
				seatIndex : i,
				originalSeat: results.currentSeats[i],
				direction,
				finalSeat,
				costIndi
			}
			tempArr.push(currentObj)
			if (i % 2 === 1){
				semiArr.push(tempArr)
				tempArr = [];
			}
		}
		return semiArr
	}

	let showme = Organize(results)

	let specialConfig = {
		seatIndex: {minWidth: 3},
		cost: {minWidth: 8, align: 'center'}
	}
	console.log()
	showme.forEach(obj => { 
		console.log(columnify(obj, {align: 'center', config: specialConfig, showHeaders: false, preserveNewLines: true , minWidth: 7}));
		console.log()
	})
}
