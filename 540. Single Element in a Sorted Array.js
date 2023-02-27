/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let check = true;
    let single;
    while (check) {
        if (nums.length > 1 && nums[0] === nums[1]) {
            nums.splice(0,2)
        } else {
            check = false
            single = nums[0]
        }
    }
    return single
};