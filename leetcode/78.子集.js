/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    var res = [];
    var dfs = function (start, path, nums) {
        res.push([...path])
        for (var i = start; i < nums.length; i++) {
            path.push(nums[i])
            dfs(i + 1, path, nums)
            path.pop();
        }
    }
    dfs(0, [], nums)
    return res;
};
// @lc code=end