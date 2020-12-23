/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    var farthest = 0
    for(var i = 0;i < nums.length - 1;i++){
        farthest = Math.max(farthest,i+nums[i])
        if(farthest <= i){
            return false
        }
    }
    return true
};
// @lc code=end

