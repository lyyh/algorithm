/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    var m = grid.length
    var n = grid[0].length
    var dp = Array.from({
        length: m
    }, () => new Array(n).fill(0))
    dp[0][0] = grid[0][0]

    for (var i = 1; i < n; i++) {
        dp[0][i] = dp[0][i - 1] + grid[0][i]
    }
    for (var j = 1; j < m; j++) {
        dp[j][0] = dp[j - 1][0] + grid[j][0]
    }
    for (var i = 1; i < m; i++) {
        for (var j = 1; j < n; j++) {
            dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]
        }
    }
    return dp[m - 1][n - 1]
};
// @lc code=end