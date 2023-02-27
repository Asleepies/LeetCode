/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let i = 1
    const len = prices.length
    let low = prices[0]
    let maxProfit = 0
    while ( i < len ) {
        let current = prices[i]
        current < low ? low = current : null
        const profit = current - low;
        profit > maxProfit ? maxProfit = profit : null
        i++
    }
    return maxProfit
};