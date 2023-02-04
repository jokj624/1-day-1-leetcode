/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    const results = [];

    const len = nums.length;

    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            if (nums[i] + nums[j] === target) {
                results.push(i);
                results.push(j);
                break;
            }
        }
        if (results.length == 2) break;
    }

    return results;
};