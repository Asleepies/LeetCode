/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const count = (n) => {
        let counts ={}
        for (let i=0, len=n.length; i<len; i++) {
            let letter = n[i]
            letter in counts ? counts[letter]++ : counts[letter] = 1
        }
        return counts
    }
    let sub = p.length
    let key = count(p)
    let window = s.slice(0,sub-1).split('')
    let counts = count(window)
    let i = sub-1   
    let out = []
    let match = true
    while (i < s.length) {
        let letter = s[i]
        window.push(letter)
        letter in counts ? counts[letter]++ : counts[letter] = 1;
        let check = Object.keys(counts) 
        match = true
        for (let n = 0; n<check.length; n++) {
            let k = check[n]
            if (!(k in key) || counts[k] != key[k]) { match = false; break; }
        } 
        if (match) {
            out.push(i-(sub-1))
        }
        counts[window[0]] > 1 ? counts[window[0]]-- : delete counts[window[0]];
        window.shift()
        i++
    }
    return out
};