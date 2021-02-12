/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为K的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

 var subarraySum = function (nums,k) {
    var n = nums.length
    var map = new Map()
    map.set(0,1)
    var ans = 0,curSum = 0
    for (var i = 0; i < n; i++) {
        curSum += nums[i];
        // 这是我们想找的前缀和 nums[0..j]
        var preSum = curSum - k;
        // 如果前面有这个前缀和，则直接更新答案
        if (map.has(preSum)){
            ans += map.get(preSum);
        }
            
        // 把前缀和 nums[0..i] 加入并记录出现次数
        map.set(curSum, 
            map.get(curSum) || 0 + 1);
    }
    return ans;
 }
// @lc code=end