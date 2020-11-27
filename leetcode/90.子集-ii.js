/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var dfs = function (res, path, nums, index, record) {
    if (index > nums.length) return
    res.push([...path])

    var record = {}
    for (var i = index; i < nums.length; i++) {
        if (record[nums[i]]) continue;

        path.push(nums[i])
        dfs(res, path, nums, i + 1, record)
        var popVal = path.pop();
        record[popVal] = 1
    }
}
var subsetsWithDup = function (nums) {
    var res = []
    var record = []
    nums.sort(function (a, b) {
        return a - b
    })
    dfs(res, [], nums, 0, record)
    return res
};
// @lc code=end