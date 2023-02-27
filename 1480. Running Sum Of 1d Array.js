/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    const running = []
    nums.reduce((sum, current) => {
        if (running.length) { current += sum }
        running.push(current)
        return current
    },nums[0])
    return running
    
};