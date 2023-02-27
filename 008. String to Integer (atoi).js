/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    s = s.trim()
    let output = 0;
    let modifier = 1
    if (s[0] == `+` || s[0] == '-') {
        modifier *= s[0] == '-' ?  -1 : 1;
        s = s.slice(1) 
    }
    const nonDigit = s.search(/[^\d]/)
    if (nonDigit >= 0) { s = s.slice(0,nonDigit) }
    if (s) { output = Number(s)*modifier }
    if ( output < Math.pow(-2,31)) { output = Math.pow(-2,31)} 
    else if ( Math.pow(2,31)-1 < output) { output = Math.pow(2,31)-1 }
    return output
};