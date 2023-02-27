/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const fullBrackets = /\(\)|\[\]|\{\}/g
    const badClose = /\([\]\}]|\{[\)\]]|\[[\)\}]/g
    const allOpen = /^[\(\[\{]*$/g
    const allClose = /^[\)\]\}]/g
    if (!s.length || s.length % 2 != 0 || s.match(badClose) || s.match(allClose)|| s.match(allOpen)) {
        return false
    }
    const split = s.split(fullBrackets).filter(s=>s!='').join('')
    if (split) {
        return isValid(split)
    } else {
        return true
    }   
};