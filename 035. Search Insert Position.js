/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    return nums.includes(target) ? nums.indexOf(target)
    : nums[0] > target ? 0
    : nums.indexOf(nums.reduce((closest,current)=> {return current < target ? current : closest}, 0))+1
};