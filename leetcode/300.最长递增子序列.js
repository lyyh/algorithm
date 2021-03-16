/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    var len = nums.length
    if(len < 2)return len
    var dp = new Array(len).fill(1)
    for(var i = 1; i < len;i++){
        for(var j = 0;j < i;j++){
            if(nums[j] < nums[i]){
                dp[i] = Math.max(dp[i],dp[j]+1)
            }
        }
    }
    var res = 0
    for(var i = 0;i < len;i++){
        res = Math.max(res,dp[i])
    }
    return res;
};
// @lc code=end

