/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    var left = 0
    var right = nums.length - 1
    while (left <= right) {
        var mid = left + ((right - left) >> 2)
        if (target === nums[mid]) {
            return mid
        } else if (target < nums[mid]) {
            right = mid -1 
        } else {
            left = mid + 1
        }
    }
    return -1
};
// @lc code=end