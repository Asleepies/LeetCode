/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let pivot = -1
    for (let i=0; i < nums.length; i++) {
        const leftSum = i === 0 ? 0 : nums.slice(0,i).reduce((sum, current) => sum + current)
        const rightSum = i === nums.length-1 ? 0 : nums.slice(i+1).reduce((sum, current) => sum + current)
        if (leftSum === rightSum) {
            pivot = i
            return pivot
        }
    }
    return pivot
};