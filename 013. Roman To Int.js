/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const key = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    const symbols = Object.keys(key)

    let total = 0;
    for (let i=s.length-1; i>=0; i--) {
        const numeral = s[i]
        let val = key[numeral]
        if ( i+1 < s.length && 
            symbols.indexOf(numeral) < symbols.indexOf(s[i+1]) ) { 
                val *= -1 }
        total += val
    }

    return total  
};