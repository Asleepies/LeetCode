/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let sequence = [0,1]
    if (n < 2) { return n }
    while (sequence.length <= n) {
        let i = sequence.length
        let last = sequence[i-1]
        let nextLast = sequence[i-2]
        sequence.push(last+nextLast)
    }
    return sequence [n]
};
