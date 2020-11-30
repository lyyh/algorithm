/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    var dp = new Array(nums.length).fill(0);
    dp[0] = nums[0]
    var max = dp[0]
    for (var i = 1; i < nums.length; i++) {
        if (dp[i - 1] + nums[i] > 0 && dp[i - 1] > 0) {
            dp[i] = Math.max(nums[i], dp[i - 1] + nums[i])
            max = Math.max(max, dp[i])
        } else {
            max = Math.max(nums[i], max)
            dp[i] = nums[i]
        }
    }
    return max;
};
var nums = [-2,1,-3,4,-1,2,1,-5,4]
console.log(maxSubArray(nums))
// @lc code=end