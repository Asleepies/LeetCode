/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const map = {}
    let check = ''
    for (let i=0; i<s.length; i++) {
        if (t[i] in map) {
            if (map[t[i]] == s[i] || t[i] == s[i]) {
                check += t[i]
            } else { return false }
        } else {
            if (!Object.values(map).includes(s[i])) {
                map[t[i]] = s[i]
                check += t[i]
            } else {
                return false
            }
        }
    }
    if (check.length == t.length) { return true } else { return false}
};