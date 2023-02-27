/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const map = ['abc','def','ghi','jkl','mno','pqrs','tuv','wxyz']
    let combos = [];
    digits = digits.split('')
    for (d in digits) {
        const current = map[digits[d]-2]
        let newCombos = []
        for (letter in current) {
            if (d > 0) {
                combos.map(c => newCombos.push(c += current[letter]))
            } else {
                newCombos.push(current[letter])
            }
        }
        combos = newCombos
    }
    return combos
};