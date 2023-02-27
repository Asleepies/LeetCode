/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let roman = ''
    const roms = [ 'I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M']
    const ints = [ 1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000 ]
    while (num > 0) {
        const start = ints.reduce((max, current) => num >= current ? current : max )   
        roman += roms[ints.indexOf(start)]
        num -= start
    }

    return roman  
};