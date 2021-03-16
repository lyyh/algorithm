/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(!nums.length)return 0
    if(nums.length === 1)return nums[0]
    if(nums.length === 2)return Math.max(nums[0],nums[1])
    nums[1] = Math.max(nums[0],nums[1])
    for(var i = 2;i < nums.length;i++){
        nums[i] = Math.max(nums[i-2]+nums[i],nums[i-1])
    }
    return nums[nums.length-1]
};
// @lc code=end

