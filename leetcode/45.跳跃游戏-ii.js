/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    if(!nums.length)return 0
    var end = 0
    var farthest = 0
    var count = 0
    for(var i = 0;i < nums.length - 1;i++){
        farthest = Math.max(farthest,nums[i] + i)
        if(end === i){
            count++
            end = farthest
        }
    }
    return count
};
// @lc code=end

