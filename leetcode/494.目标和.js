/*
 * @lc app=leetcode.cn id=494 lang=javascript
 *
 * [494] 目标和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var backtrack = function (sum, index, target, result, nums) {
    if (index === nums.length) {
        if (sum === target) {
            result++
        }
        return
    }

    backtrack(sum + nums[index], index + 1, target, result, nums)

    backtrack(sum - nums[index], index + 1, target, result, nums)
}
var findTargetSumWays = function (nums, S) {
    if (!nums.length) return 0
    var result = 0
    backtrack(0, 0, S, result, nums)
    return result
};
// @lc code=end