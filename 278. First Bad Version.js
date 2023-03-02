/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
*/
const isBadVersion = function(version, target) {
    return version >= target ? true : false;
};

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * Using Binary Search
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let start = 0
        let end = n
        while (start != end-1) {
            if (start === end) { return end }
            let mid = Math.floor(start + (end - start) / 2)
            isBadVersion(mid) ? end = mid : start = mid;
        }
        return end
    };
    
};