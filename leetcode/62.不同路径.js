/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// 二维数组动态规划
var uniquePaths = function (m, n) {
    var dp = new Array(m).fill(new Array(n))

    for (var i = 0; i < n; i++) {
        dp[0][i] = 1
    }
    for (var j = 0; j < m; j++) {
        dp[j][0] = 1
    }

    for (var i = 1; i < m; i++) {
        for (var j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
        }
    }
    return dp[m - 1][n - 1]
};
// @lc code=end