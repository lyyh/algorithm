/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    // 不足三个
    if (!nums || nums.length < 3) return []
    // 排序
    nums = nums.sort(function (a, b) {
        return a - b
    })
    var len = nums.length
    var res = [];
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > 0) return res;
        if (i > 0 && nums[i] === nums[i - 1]) continue
        var left = i + 1;
        var right = len - 1;
        while (left < right) {
            if (nums[i] + nums[left] + nums[right] === 0) {
                res.push([nums[i], nums[left], nums[right]])
                while (left < right && nums[left] === nums[left + 1]) {
                    ++left
                }
                while (left < right && nums[right] === nums[right - 1]) {
                    --right
                }
                --right
                ++left
            } else if (nums[i] + nums[left] + nums[right] > 0) {
                --right
            } else {
                ++left
            }
        }
    }
    return res
};
// @lc code=end

