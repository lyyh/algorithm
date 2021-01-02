/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    if(!nums.length)return 0
    var minLen = nums.length
    var dp = Array.from({length:nums.length},()=>{
        return new Array(nums.length).fill(0)
    })
    for(var i = 0;i < nums.length;i++){
        dp[i][i] = nums[i]
        if(nums[i] >= s)return 1
    }
    for(var i = 0; i < nums.length;i++){
        for(var j = i+1;j < nums.length;j++){
            dp[i][j] = dp[i][j-1] + nums[j]
            if(dp[i][j] >= s){
                minLen = Math.min(minLen,j - i +1)
            }
        }
    }
    return minLen === nums.length?0:minLen
};
minSubArrayLen(4,[1,4,4])
// @lc code=end

