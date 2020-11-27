/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// var longestConsecutive = function (nums) {
//     // hash
//     var set = new Set();
//     for (var n = 0; n < nums.length; n++) {
//         set.add(nums[n])
//     }
//     var res = 0;
//     for (var i = 0; i < nums.length; i++) {
//         if (!set.has(nums[i] - 1)) {
//             var currentNum = nums[i]
//             var len = 1;
//             while (set.has(++currentNum)) {
//                 len++
//             }
//             res = Math.max(res,len)
//         }
//     }
//     return res;
// };
var longestConsecutive = function (nums) {
    var map = new Map();
    var res = 0;
    for (var i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) {
            var left = !map.has(nums[i] - 1)? 0 : map.get(nums[i] - 1)
            var right = !map.has(nums[i] + 1)? 0 : map.get(nums[i] + 1)
            var longest = left + right + 1;
            map.set(nums[i], longest)
            map.set(nums[i] - left, longest)
            map.set(nums[i] + right, longest)
            res = Math.max(res, longest)
        }
    }
    return res;
}
// @lc code=end