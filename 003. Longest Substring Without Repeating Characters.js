/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let longest = ''
    for (let i=0, len=s.length; i<len ; i++) {
        let sub = `${s[i]}`
        for (let n=i+1; n < len; n++) {
            let char = s[n]
            !sub.includes(char) ? sub += char : n = len
        }
        sub.length > longest.length ? longest = sub : null
    }
    return longest.length
};