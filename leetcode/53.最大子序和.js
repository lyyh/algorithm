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
        dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
    }
    for(var i = 0;i < dp.length;i++){
        max = Math.max(max,dp[i])
    }
    return max
};
// @lc code=end