/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let check = digits.length ? true : false;
    let i = digits.length-1
    while (check) {
        const last = digits[i]
        if (last < 9) {
            digits[i]++
            check = false
        } else {
            digits[i] = 0
            if (i === 0) { digits.unshift(1); check = false }
        }
        i--
    }
    return digits
};