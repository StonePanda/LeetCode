/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let result = numBottles
    let left = 0
    while (numBottles >= numExchange) {
        left = numBottles % numExchange
        numBottles = Math.floor(numBottles / numExchange)
        result += numBottles
        numBottles += left
    }
    return result
};