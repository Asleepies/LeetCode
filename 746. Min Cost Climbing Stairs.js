/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let n = cost.length
    let first = cost[0]
    let second = cost[1]
    if ( n <= 2 ) { return Math.min(first, second) }
    for (let i=2; i< n ; i++) {
        let current = cost[i] + Math.min(first, second);
        first = second
        second = current
    }
    return Math.min(first, second)
};
