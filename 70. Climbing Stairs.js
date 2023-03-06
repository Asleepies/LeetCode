/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n < 2) { return n }
    let i = 0
    let x = 0
    let y = 1
    let current;
    while (i < n) {
        current = x + y
        x = y
        y = current
        i++
    }
    return current
};