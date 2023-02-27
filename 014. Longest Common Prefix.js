/**
 * @param {string[]} strs
 * @return {string}
 */
var isValid = function(strs) {
    let pref = ''
    const n = strs[0]
    if (!n) { return ''}
    for (let i=0; i < strs[0].length; i++) {
        pref += n[i];
        if (strs.filter(s => s.match(new RegExp(`^${pref}`))).length != strs.length) {
            if (i === 0) { return '' }
            pref = pref.substring(0,pref.length-1)
        } 
    }
    return pref
};