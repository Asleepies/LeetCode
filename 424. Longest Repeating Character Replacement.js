/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    if (k >= s.length) {return s.length}
    let maxCount = 0
    let key = {}
    let start = 0
    let end = 0
    while (end < k+maxCount && end < s.length) {
        let n = s[end]; 
        n in key ? key[n]++ : key[n] = 1;
        if (key[n] > maxCount) { maxCount = key[n]; };
        end++
    }
    while (end < s.length) {
        let right = s[end]
        right in key ? key[right]++ : key[right] = 1
        
        if ( key[right] > maxCount ) { 
            maxCount = key[right];
        } else {
            let left = s[start]
            key[left] > 0 ? key[left]-- : delete key[left];
            start++
        }
        end++
    }
    return end-start
};