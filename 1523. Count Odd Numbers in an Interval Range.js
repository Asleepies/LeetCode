/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    let range = (high-low+1)/2
    return high % 2 === 0 ? Math.floor(range) : Math.ceil(range)
};