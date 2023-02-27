/**
 * @param {string} s
 * @return {number}
 */
var isSubsequence = function(s, t) {
    for (let i = 0; i < s.length; i++) {
        const lookup = t.indexOf(s[i])
        if (lookup >= 0) {
            t = t.slice(lookup+1)
        } else {
            return false
        }
    }
    return true
    
};