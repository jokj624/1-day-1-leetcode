/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let mid = 0;
    let result = 0;

    while (left <= right) {
        mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            result = mid;
            break;
        }

        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    if (result === 0) {
        if (nums[mid] >= target) result = mid
        else result = mid + 1;

        if (result < 0) result = 0;
    }

    return result;
};