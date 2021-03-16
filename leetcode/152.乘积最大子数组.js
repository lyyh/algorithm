/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    var n = nums.length
    if(n === 0)return 0
    if(n === 1)return nums[0]

    var max = nums[0]
    var imax = nums[0]
    var imin = nums[0]
    for(var i = 1;i < n;i++){
        if(nums[i] < 0){
            [imax,imin] = [imin,imax]
        }
        imax = Math.max(imax * nums[i],nums[i])
        imin = Math.min(imin * nums[i],nums[i])
        max = Math.max(max,imax)
    }
    return max
};
// @lc code=end

