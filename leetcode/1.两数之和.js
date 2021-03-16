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
<<<<<<< HEAD

=======
    var map = new Map()
    for(var i = 0;i < nums.length;i++){
        if(map.get(target - nums[i]) !== undefined){
            return [map.get(target - nums[i]),i]
        }else{
            map.set(nums[i],i)
        }
    }
    return []
>>>>>>> ddf08f574eb547b88fd4d95ed1b8079e536366b3
};
// @lc code=end

