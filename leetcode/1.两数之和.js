/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var map = new Map()
    for(var i = 0;i < nums.length;i++){
        var k = target - nums[i]
        if(map.has(k)){
            return [map.get(k),i]
        }
        map.set(nums[i],i)
    }
    return []
};
// @lc code=end

