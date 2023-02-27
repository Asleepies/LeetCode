/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows < 2) {return s}
    const staging = []
    for (let i=0; i < numRows; i++) { staging.push('')}
    let isUp = true
    let r = 0
    let c = 0
    for (n in s) {
        if (r == 0 || r == staging.length-1) { isUp = !isUp }
        staging[r] += s[n]
        if (isUp) {
            c++ 
            r--
        } else {
            r++
        }
    }
     return staging.join('')
};